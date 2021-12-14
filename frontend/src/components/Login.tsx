import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';

interface ILoginProps {
  onLoginClick: () => void;
}

interface LoginState {
  phoneNumber: string;
  password: string;
}

export function Login(props: ILoginProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.loginFormContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="phoneNumber"
        />
        {/* {errors.phoneNumber && <Text>This is required.</Text>} */}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="password"
        />
        {/* {errors.password && <Text>This is required.</Text>} */}

        <Button
          onPress={handleSubmit(onSubmit)}
          //   onPress={props.onLoginClick}
          title="Login"
          color="#007AFF"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 2,
    marginHorizontal: 2,
    marginVertical: 2,
  },
  loginFormContainer: {
    width: '50%',
    height: '50%',
    borderWidth: 2,
  },
});
