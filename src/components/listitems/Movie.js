import React from 'react';
import { Box, Button, HStack, Image, VStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import placeholder from '../../../assets/placeholder.png';

const Movie = (props) => {
  const { media_type, popularity, image, title, release_date, id, searchType } =
    props;
  const navigation = useNavigation();

  return (
    <Box>
      <HStack>
        <Box>
          {image == 'https://image.tmdb.org/t/p/original/null' || undefined ? (
            <Image source={placeholder} alt='picture of movie' ml={3} mr={3} />
          ) : (
            <Image
              source={{ uri: image }}
              alt='picture of movie'
              size='md'
              ml={5}
              mr={3}
            />
          )}
        </Box>
        <Box width='60%'>
          <VStack>
            <Text bold fontSize='sm'>
              {title}
            </Text>
            <Text color='coolGray.500' fontSize='xs'>
              Popularity: {popularity}
            </Text>
            <Text color='coolGray.500' fontSize='xs'>
              Release Date: {release_date}
            </Text>
            <Button
              bgColor='blue.500'
              mb={3}
              onPress={() =>
                navigation.navigate('Details', {
                  title: title,
                  id: id,
                  image: image,
                  searchType: searchType,
                  media_type: media_type,
                })
              }
            >
              More Details
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Movie;
