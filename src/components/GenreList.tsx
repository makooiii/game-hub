import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelecGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelecGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map(genre => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image width="32px" borderRadius={8} src={getCroppedImageURL(genre.image_background)} />
            <Button onClick={() => onSelecGenre(genre)} fontSize="lg" variant="Link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
