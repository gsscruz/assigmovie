import { Box, FlatList, Text } from 'native-base';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import TVMenu from '../menus/TVMenu';
import axios from 'axios';
import { BASE_URL, API } from '../../config/api_config';
import Movie from '../listitems/Movie';

const url = axios.create({
  baseURL: BASE_URL,
});

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [apiCategory, setApiCategory] = useState('airing_today');

  useEffect(() => {
    url
      .get(`${BASE_URL}tv/${apiCategory}${API}&language=en-US&page=1`)
      .then((res) => {
        setTvShows(res.data.results);
      });
  }, [apiCategory]);

  return (
    <Box width='100%' style={styles.container}>
      <TVMenu apiCategory={apiCategory} setApiCategory={setApiCategory} />
      <FlatList
        data={tvShows}
        renderItem={({ item }) => (
          <Movie
            image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            title={item.name}
            popularity={item.popularity}
            release_date={item.first_air_date}
            id={item.id}
            overview={item.overview}
            media_type={item.media_type}
            searchType='tv'
          />
        )}
      />
    </Box>
  );
};

export default TvShows;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
