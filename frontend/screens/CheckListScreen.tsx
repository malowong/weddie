import React from "react";
import { Text, View } from "react-native";
import { styles } from "../style";

export default function CheckListScreen() {
    return (
      <View style={styles.screen}>
        <Text style={styles.titleText}>待辦事項</Text>
        <Text style={styles.baseText}>待辦事項待辦事項待辦事項待辦事項待辦事項</Text>
      </View>
    );
  }