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

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    try {
      const baseURL = "http://192.168.21.11:5000";
      const res = await axios.post(`${baseURL}/api/auth/signup`, {
        name,
        username,
        email,
        dob,
        gender,
        phone,
        password,
      });
      if (res.data.success) {
        Alert.alert("Success", "Account created!");
        router.replace("/login");
      }
    } catch (err: any) {
      Alert.alert("Signup Failed", err.response?.data?.error || "Server Error");
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
        {/* Penguin logo in white circle */}
        <View className="absolute -top-[110px] right-[15] z-10">
          <Image
            source={require("../assets/images/pengiun-logo.png")}
            className="w-44 h-44"
            resizeMode="contain"
          />
        </View>
        <View className="px-7 pt-[40px]">
          {/* Header */}
          <View className="mb-8">
            <Text className="text-3xl font-bold text-white mb-1 tracking-tight">
              Sign Up to <Text className="font-extrabold">LINQUE</Text>
            </Text>
            <Text className="text-base font-medium text-white opacity-80">
              Just a few quick things to get started
            </Text>
          </View>
          {/* Form Fields */}
          <View className="gap-4 mb-6">
            <TextInput
              className="border border-white rounded-full px-5 py-3 text-white text-base font-normal bg-transparent"
              placeholder="Full Name"
              placeholderTextColor="white"
              value={name}
              onChangeText={setName}
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
            />
            <TextInput
              className="border border-white rounded-full px-5 py-3 text-white text-base font-normal bg-transparent"
              placeholder="User Name"
              placeholderTextColor="white"
              value={username}
              onChangeText={setUsername}
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
            />
            <TextInput
              className="border border-white rounded-full px-5 py-3 text-white text-base font-normal bg-transparent"
              placeholder="Email Address"
              placeholderTextColor="white"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
            />
            {/* Row: Date of Birth & Gender */}
            <View className="flex-row gap-3">
              <TextInput
                className="flex-1 border border-white rounded-full px-5 py-3 text-white text-base font-normal bg-transparent"
                placeholder="Date of Birth"
                placeholderTextColor="white"
                value={dob}
                onChangeText={setDob}
                importantForAutofill="no"
                autoComplete="off"
                textContentType="none"
              />
              <TextInput
                className="flex-1 border border-white rounded-full px-5 py-3 text-white text-base font-normal bg-transparent"
                placeholder="Gender"
                placeholderTextColor="white"
                value={gender}
                onChangeText={setGender}
                importantForAutofill="no"
                autoComplete="off"
                textContentType="none"
              />
            </View>
            <TextInput
              className="border border-white rounded-full px-5 py-3 text-white text-base font-normal bg-transparent"
              placeholder="Phone Number"
              placeholderTextColor="white"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
            />
            <TextInput
              className="border border-white rounded-full px-5 py-3 text-white text-base font-normal bg-transparent"
              placeholder="Password"
              placeholderTextColor="white"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
            />
            <TextInput
              className="border border-white rounded-full px-5 py-3 text-white text-base font-normal bg-transparent"
              placeholder="Confirm Password"
              placeholderTextColor="white"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
            />
          </View>
          {/* Button */}
          <TouchableOpacity
            className="bg-white py-4 rounded-full mb-6 shadow-sm"
            onPress={handleSignup}
          >
            <Text className="text-[#8B5CF6] text-center text-base font-semibold">
              Create Account
            </Text>
          </TouchableOpacity>
          {/* Footer */}
          <View className="flex-row justify-center items-center mb-4">
            <Text className="text-white text-base opacity-80">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.navigate("/login")}>
              <Text className="text-white text-base font-bold underline">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
