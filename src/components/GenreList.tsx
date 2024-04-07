import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Heading, Image, Link, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelecGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelecGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map(genre => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image width="32px" borderRadius={8} objectFit="cover" src={getCroppedImageURL(genre.image_background)} />
              <Button whiteSpace={"normal"} textAlign="left" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelecGenre(genre)} fontSize="lg" variant="Link">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
