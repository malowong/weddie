import React from "react";
import { Text, View } from "react-native";
import { styles } from "../style";

export default function SettingScreen() {
    return (
      <View style={styles.screen}>
        <Text style={styles.titleText}>用戶設定</Text>
        <Text style={styles.baseText}>設定設定設定設定設定設定</Text>
      </View>
    )
  }