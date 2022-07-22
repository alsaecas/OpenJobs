import * as React from "react";
import { useState } from "react";
import { Button, Card, Title, Paragraph, IconButton } from "react-native-paper";
import { Image, StyleSheet, View, ImageBackground, Text } from "react-native";

const UserComponent = (props: any) => {
  const [heart, setHeart] = useState("heart-outline");
  const handleHeart = () => {
    if (heart == "heart-outline") {
      setHeart("heart");
    } else {
      setHeart("heart-outline");
    }
  };
  return (
    <Card>
      <ImageBackground
        style={{
          height: 150,
          alignItems: "center",
        }}
        source={{ uri: "https://picsum.photos/700" }}
      >
        <Image
          source={require("../assets/logo.jpg")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            marginTop: 20,
            borderColor: "white",
            borderWidth: 2,
          }}
        />
        <Text style={{ color: "white", fontSize: 20 }}>Alejandro Saez</Text>
      </ImageBackground>
    </Card>
  );
};

export default UserComponent;
