import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  CustomerHome: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const baseURL = "http://192.168.21.11:5000";

      const res = await axios.post(`${baseURL}/api/auth/login`, {
        email,
        password,
      });

      if (res.data.success) {
        await AsyncStorage.setItem("token", res.data.token);
        router.replace("/customer-home");
      }
    } catch (err: any) {
      Alert.alert("Login Failed", err.response?.data?.error || "Server Error");
    }

    if (email == "adnan" && password == "123") {
      router.replace("/customer-home");
    }
  };

  return (
    <>
      <StatusBar className="" />
      <View className="h-[150px]">
        <Image
          source={require("../assets/images/gray-bg-3.avif")}
          className="h-[400px]"
        />
      </View>

      <View className="flex-1 bg-[#8B5CF6] rounded-tl-[40px] rounded-tr-[40px] relative">
        <View className=" px-7 pt-[50px] ">
          <View className="mb-12">
            <Text className="text-4xl font-bold text-white mb-2 tracking-tight">
              Sign In
            </Text>
            <Text className="text-lg font-normal text-white">
              Please Sign in to continue
            </Text>
          </View>

          <View className="">
            <Image
              source={require("../assets/images/pengiun-logo.png")}
              className="w-44 h-44 absolute bottom-[100px] right-0"
            />
          </View>

          <View className="gap-6">
            <View className="gap-2">
              <Text className="text-sm text-white mb-2 font-medium">
                Username/Email
              </Text>
              <TextInput
                className="bg-transparent border border-white rounded-full p-4  text-white text-base font-normal"
                placeholder="Enter your email"
                placeholderTextColor="white"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                importantForAutofill="no"
                autoComplete="off"
                textContentType="none"
              />
            </View>

            <View className="">
              <Text className="text-sm text-white mb-2 font-medium">
                Password
              </Text>
              <TextInput
                className="bg-transparent border border-white rounded-full p-4  text-white text-base font-normal"
                placeholder="Enter your password"
                placeholderTextColor="white"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                importantForAutofill="no"
                autoComplete="off"
                textContentType="none"
              />
            </View>
          </View>

          <View>
            <TouchableOpacity
              className="bg-white py-4 rounded-full mt-4 shadow-sm"
              onPress={handleLogin}
            >
              <Text className="text-[#8B5CF6] text-center text-base font-semibold">
                Log In
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center items-center mt-8">
            <Text className="text-white text-sm">Forgot Password?</Text>
          </View>

          <View className="flex-row justify-center items-center mt-8">
            <Text className="text-gray-400 text-sm">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.navigate("/signup")}>
              <Text className="text-white text-sm font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
