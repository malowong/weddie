import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../style";

export default function NotificationsScreen() {
    return (
      <View style={styles.screen}>
        <Text style={styles.titleText}>訊息通知</Text>
        <Text style={styles.baseText}>訊息通知訊息通知訊息通知訊息通知</Text>
      </View>
    );
  }