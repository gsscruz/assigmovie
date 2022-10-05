import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import MoviesContainer from '../containers/MoviesContainer';
import FindMovies from '../containers/FindMovies';
import TvShows from '../containers/TvShows';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
      }}
    >
      <Tab.Screen name='Movies' component={MoviesContainer} />
      <Tab.Screen name='Search Results' component={FindMovies} />
      <Tab.Screen name='TV Shows' component={TvShows} />
    </Tab.Navigator>
  );
};

export default TopNavigation;
