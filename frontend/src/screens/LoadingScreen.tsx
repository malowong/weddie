import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "../../style";
import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "../redux/store";
import { restoreLoginThunk } from "../redux/auth/thunk";

export default function LoadingScreen({ navigation }: { navigation: any }) {

    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: IRootState) => state.auth.isAuthenticated)

    useEffect(() => {
        dispatch(restoreLoginThunk())
    }, [useDispatch])

    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate('MainStackScreen')
        } else {
            navigation.navigate('AuthStackScreen')
        }
    }, [isAuthenticated])

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