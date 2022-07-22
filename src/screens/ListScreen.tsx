import React from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View } from "react-native";
import { Navigation } from "../types";
import CardComponent from "../components/CardComponent";

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 120,
  },
});

type Props = {
  navigation: Navigation;
};

export const ListScreen = ({ navigation }: Props) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={[
          { key: "Elemento 1", content: "Este es el contenido del elemento 1" },
          { key: "Elemento 2", content: "Este es el contenido del elemento 2" },
          { key: "Elemento 3", content: "Este es el contenido del elemento 3" },
          { key: "Elemento 4", content: "Este es el contenido del elemento 4" },
          { key: "Elemento 5", content: "Este es el contenido del elemento 5" },
          { key: "Elemento 6", content: "Este es el contenido del elemento 6" },
          { key: "Elemento 7", content: "Este es el contenido del elemento 7" },
          { key: "Elemento 8", content: "Este es el contenido del elemento 8" },
          { key: "Elemento 9", content: "Este es el contenido del elemento 9" },
          {
            key: "Elemento 10",
            content: "Este es el contenido del elemento 10",
          },
        ]}
        renderItem={({ item }) => (
          <CardComponent
            title={item.key}
            content={item.content}
            navigation={navigation}
          ></CardComponent>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
