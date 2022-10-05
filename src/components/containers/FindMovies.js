import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Box } from 'native-base';

const FindMovies = () => {
  return (
    <>
      <Box width='100%' style={styles.container}>
        <Box width='100%' style={styles.waiting}>
          <Text bold fontSize='xl'>
            Please initiate a search
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default FindMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  waiting: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 250,
  },
});
