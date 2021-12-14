import React from "react";
import { Text, View } from "react-native";
import { styles } from "../style";

export default function MaterialScreen() {
    return (
      <View style={styles.screen}>
        <Text style={styles.titleText}>物資管理</Text>
        <Text style={styles.baseText}>物資管理物資管理物資管理物資管理物資管理</Text>
      </View>
    );
  }