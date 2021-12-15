import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "../../style";
import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "../redux/store";
import { useNavigation } from "@react-navigation/native";

export default function LoadingScreen() {

    // const dispatch = useDispatch()
    // const navigation = useNavigation()
    // const isAuthenticated = useSelector((state: IRootState) => state.auth.isAuthenticated)

    // useEffect(() => {
    //     dispatch(restoreLoginThunk)
    // }, [dispatch])

    // useEffect(() => {
    //     if (isAuthenticated == null) {
    //         return;
    //     }
    //     if (isAuthenticated) {
    //         navigation.navigate('MainStackScreen')
    //     } else {
    //         navigation.navigate('LoginScreen')
    //     }
    // })

    return (
      <View style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
      }}>
        <Text style={{fontSize: 30}}>Loading...</Text>
      </View>
    );
  }