import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Image, Text, FlatList} from 'react-native';

import {listStyles} from './listStyles';

export const Posts = () => {
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

  const post = ({item}: any) => {
    return (
      <View style={listStyles.itemContainer}>
        <Image source={{uri: item.download_url}} style={listStyles.itemImage} />
        <View style={listStyles.itemTextContainer}>
          <Text style={listStyles.itemText}>{item.author}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      renderItem={post}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={loadMore}
      onRefresh={refreshHandler}
      refreshing={loading}
    />
  );
};
