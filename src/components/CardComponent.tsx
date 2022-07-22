import * as React from "react";
import { useState } from "react";
import { Button, Card, Title, Paragraph, IconButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const CardComponent = (props: any) => {
  const [heart, setHeart] = useState("heart-outline");
  const handleHeart = () => {
    if (heart == "heart-outline") {
      setHeart("heart");
    } else {
      setHeart("heart-outline");
    }
  };
  return (
    <Card elevation={5} style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 5,
        }}
      >
        <Card.Content style={{ flex: 1, minWidth: 250 }}>
          <Title>{props.title}</Title>
          <Paragraph>{props.content}</Paragraph>
        </Card.Content>
        <Card.Actions style={{ flex: 2, justifyContent: "flex-end" }}>
          <IconButton
            size={20}
            icon={heart}
            color="red"
            onPress={() => handleHeart()}
          ></IconButton>
          <IconButton
            size={20}
            icon="dots-vertical"
            color="gray"
            onPress={() =>
              props.navigation.navigate("Detalles", {
                title: props.title,
                content: props.content,
              })
            }
          ></IconButton>
        </Card.Actions>
      </View>
    </Card>
  );
};

export default CardComponent;
