import React from "react";
import {
  Box,
  Text,
  Image,
  Button,
  VStack,
  Heading,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";

const RecipePage = ({ recipe, onBack }) => {
  return (
    <Box>
      <Button onClick={onBack} mb={4} colorScheme="blue">
        ← Terug naar overzicht
      </Button>
      <Heading mb={4}>{recipe.label}</Heading>
      <Image
        src={recipe.image}
        alt={recipe.label}
        borderRadius="md"
        mb={4}
        objectFit="cover"
        width="100%"
        height="400px"
      />

      <SimpleGrid columns={[1, 2]} spacing={6}>
        <VStack align="start" spacing={2}>
          <Text>
            <strong>Maaltijdtype:</strong> {recipe.mealType?.join(", ")}
          </Text>
          <Text>
            <strong>Gerecht:</strong> {recipe.dishType?.join(", ")}
          </Text>
          <Text>
            <strong>Kooktijd:</strong> {recipe.totalTime} minuten
          </Text>
          <Text>
            <strong>Dieet:</strong> {recipe.dietLabels?.join(", ")}
          </Text>
          <Text>
            <strong>Gezondheid:</strong> {recipe.healthLabels?.join(", ")}
          </Text>
          <Text>
            <strong>Waarschuwingen:</strong> {recipe.cautions?.join(", ")}
          </Text>
          <Text>
            <strong>Porties:</strong> {recipe.yield}
          </Text>
        </VStack>

        <Box>
          <Text fontWeight="bold" mb={2}>
            Ingrediënten:
          </Text>
          <List spacing={1}>
            {recipe.ingredientLines.map((ingredient, i) => (
              <ListItem key={i}>• {ingredient}</ListItem>
            ))}
          </List>
        </Box>
      </SimpleGrid>

      <Box mt={6}>
        <Text fontWeight="bold" mb={2}>
          Voedingswaarden (per totaal):
        </Text>
        <List spacing={1}>
          <ListItem>
            🟢 Energie: {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
            kcal
          </ListItem>
          <ListItem>
            💪 Eiwitten: {Math.round(recipe.totalNutrients.PROCNT.quantity)} g
          </ListItem>
          <ListItem>
            🧈 Vet: {Math.round(recipe.totalNutrients.FAT.quantity)} g
          </ListItem>
          <ListItem>
            🍞 Koolhydraten: {Math.round(recipe.totalNutrients.CHOCDF.quantity)}{" "}
            g
          </ListItem>
          <ListItem>
            🩸 Cholesterol: {Math.round(recipe.totalNutrients.CHOLE.quantity)}{" "}
            mg
          </ListItem>
          <ListItem>
            🧂 Natrium: {Math.round(recipe.totalNutrients.NA.quantity)} mg
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RecipePage;
