import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeIndex from '../screens/HomeIndex';
import ShowIndex from '../screens/ShowIndex';

const Stack = createNativeStackNavigator();
const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Movies App'
        component={HomeIndex}
        options={{
          title: 'Movies App',
          headerStyle: {
            backgroundColor: '#2c3e35',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />
      <Stack.Screen
        name='Details'
        component={ShowIndex}
        options={({ route }) => ({
          headerBackTitle: 'Back to List',
          id: route.params.id,
          title: route.params.title,
          searchType: route.params.searchType,
          image: route.params.image,
          media_type: route.params.media_type,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
