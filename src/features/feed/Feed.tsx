import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {FeedCard} from '../../components/feedCard/FeedCard';
import {feedScreenStyles} from './feedScreenStyles';

export const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const getPosts = async () =>
    await axios
      .get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then(response => {
        setData(data.concat(response.data));
      })
      .finally(() => setLoading(false));

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, []);

  const loadMore = () => {
    setPage(page + 1);
    setLoading(true);
    getPosts();
  };

  const refreshHandler = () => {
    setPage(0);
    setLoading(true);
    setData([]);
    getPosts();
  };

  return (
    <View style={feedScreenStyles.feedScreen}>
      <FlatList
        renderItem={data => (
          <FeedCard url={data.item.download_url} author={data.item.author} />
        )}
        data={data}
        keyExtractor={(item, id) => id.toString()}
        onEndReached={loadMore}
        onRefresh={refreshHandler}
        refreshing={loading}
      />
    </View>
  );
};
