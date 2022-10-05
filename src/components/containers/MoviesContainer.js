import { BASE_URL, API } from '../../config/api_config';
import { Box, FlatList } from 'native-base';
import React, { useEffect, useState } from 'react';
import Movie from '../listitems/Movie';
import Menu from '../menus/Menu';
import axios from 'axios';
import { StyleSheet } from 'react-native';

const url = axios.create({
  baseURL: BASE_URL,
});

const MoviesContainer = () => {
  const [movie, setMovie] = useState([]);
  const [apiCategory, setApiCategory] = useState('popular');

  useEffect(() => {
    url
      .get(`${BASE_URL}movie/${apiCategory}${API}&language=en-US&page=1`)
      .then((res) => {
        setMovie(res.data.results);
      });
  }, [apiCategory]);

  return (
    <>
      <Box width='100%' style={styles.container}>
        <Menu apiCategory={apiCategory} setApiCategory={setApiCategory} />
        <FlatList
          data={movie}
          renderItem={({ item }) => (
            <Movie
              searchType='movie'
              release_date={item.release_date}
              image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              title={item.title}
              id={item.id}
              popularity={item.popularity}
              overview={item.overview}
              media_type={item.media_type}
            />
          )}
        ></FlatList>
      </Box>
    </>
  );
};

export default MoviesContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
