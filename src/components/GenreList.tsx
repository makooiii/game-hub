import useGenres from '../hooks/useGenres'
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import getCroppedImageURL from '../services/image-url'

const GenreList = () => {
    const {data} = useGenres()
  return (
    <List>
        {data.map(genre => <ListItem paddingY='5px' key={genre.id}>
          <HStack>
            <Image width='32px' borderRadius={8} src={getCroppedImageURL(genre.image_background)} />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>)}

    </List>
  )
}

export default GenreList