import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {useTheme} from '@react-navigation/native';

import {FeedCard} from '../../components/feedCard/FeedCard';
import {feedScreenStyles} from './feedScreenStyles';
import {
  startLoading,
  stopLoading,
  setPage,
  refresh,
} from '../../actions/feedActions';
import {FeedState} from '../../reducers/feedReducer';
import {getPosts} from '../../middlewares/feedThunk';
import {AppState} from '../../reducers/RootReducer';

interface FeedProps extends FeedState {
  startLoading: () => void;
  stopLoading: () => void;
  setPage: () => void;
  getPosts: (page: number) => void;
  refresh: () => void;
}

const feed = (props: FeedProps) => {
  useEffect(() => {
    props.setPage();
    props.getPosts(props.page);
  }, []);

  const loadMore = () => {
    props.setPage();
    props.getPosts(props.page);
  };

  const refreshHandler = () => {
    props.refresh();
    props.getPosts(props.page);
  };

  const {colors} = useTheme();

  return (
    <View
      style={[feedScreenStyles.feedScreen, {backgroundColor: colors.primary}]}>
      <FlatList
        renderItem={data => (
          <FeedCard url={data.item.download_url} author={data.item.author} />
        )}
        data={props.data}
        keyExtractor={(item, id) => id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
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
  getPosts: (page: number) => dispatch(getPosts(page)),
});

export const Feed = connect(mapStateToProps, mapDispatchToProps)(feed);
