import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

import {FeedCard} from '../../components/feedCard/FeedCard';
import {feedScreenStyles} from './feedScreenStyles';
import {
  startLoading,
  stopLoading,
  setPage,
  refresh,
} from '../../actions/feedActions';
import {getData, FeedState} from '../../reducers/feedReducer';
import {AppState} from '../../reducers/RootReducer';

interface FeedProps extends FeedState {
  oading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  setPage: () => void;
  getData: (page: number) => void;
  refresh: () => void;
}

const feed = (props: FeedProps) => {
  useEffect(() => {
    props.startLoading;
    props.getData(props.page);
  }, []);

  const loadMore = () => {
    props.startLoading;
    props.setPage();
    props.getData(props.page);
  };

  const refreshHandler = () => {
    props.startLoading();
    props.refresh();
    props.getData(props.page);
    props.stopLoading();
  };

  return (
    <View style={feedScreenStyles.feedScreen}>
      <FlatList
        renderItem={data => (
          <FeedCard url={data.item.download_url} author={data.item.author} />
        )}
        data={props.data}
        keyExtractor={(item, id) => id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        onRefresh={refreshHandler}
        refreshing={props.isLoading}
      />
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.feedReducer.isLoading,
  page: state.feedReducer.page,
  data: state.feedReducer.data,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, undefined, Action>,
) => ({
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  setPage: () => dispatch(setPage()),
  refresh: () => dispatch(refresh()),
  getData: (page: number) => dispatch(getData(page)),
});

export const Feed = connect(mapStateToProps, mapDispatchToProps)(feed);
