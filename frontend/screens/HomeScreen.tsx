import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../style";

export default function HomeScreen() {
    return (
      <View style={styles.screen}>
        <Text style={styles.titleText}>主頁</Text>
        <Text style={styles.baseText}>主頁主頁主頁主頁主頁</Text>
      </View>
    );
  }