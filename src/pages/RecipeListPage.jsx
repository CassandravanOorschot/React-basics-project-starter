import { useState } from "react";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Input,
  Badge,
  VStack,
  Heading,
} from "@chakra-ui/react";
import data from "../utils/data";

const RecipeListPage = ({ onSelectRecipe }) => {
  const [search, setSearch] = useState("");

  const filtered = data.hits.filter(({ recipe }) => {
    const query = search.toLowerCase();
    return (
      recipe.label.toLowerCase().includes(query) ||
      recipe.healthLabels.some((label) => label.toLowerCase().includes(query))
    );
  });

  return (
    <Box>
      <Heading mb={4}>Recepten Overzicht</Heading>
      <Input
        placeholder="Zoek op naam of gezondheid (bv. vegan)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={6}
      />
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filtered.map(({ recipe }) => (
          <Box
            key={recipe.label}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            onClick={() => onSelectRecipe(recipe)}
            cursor="pointer"
            _hover={{ boxShadow: "md" }}
            transition="0.2s"
          >
            <Image
              src={recipe.image}
              alt={recipe.label}
              objectFit="cover"
              width="100%"
              height="150px"
            />
            <Box p={4}>
              <Text fontSize="lg" fontWeight="bold">
                {recipe.label}
              </Text>
              <VStack align="start" spacing={1} mt={2}>
                {recipe.dietLabels?.map((label) => (
                  <Badge key={label} colorScheme="orange">
                    {label}
                  </Badge>
                ))}
                {recipe.cautions?.map((caution) => (
                  <Badge key={caution} colorScheme="red">
                    ⚠ {caution}
                  </Badge>
                ))}
                {recipe.mealType?.map((type) => (
                  <Badge key={type} colorScheme="blue">
                    {type}
                  </Badge>
                ))}
                {recipe.dishType?.map((type) => (
                  <Badge key={type} colorScheme="purple">
                    {type}
                  </Badge>
                ))}
                {recipe.healthLabels.includes("Vegetarian") && (
                  <Badge colorScheme="green">Vegetarisch</Badge>
                )}
                {recipe.healthLabels.includes("Vegan") && (
                  <Badge colorScheme="yellow">Vegan</Badge>
                )}
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecipeListPage;
