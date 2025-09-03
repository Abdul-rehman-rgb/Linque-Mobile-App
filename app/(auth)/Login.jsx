// screens/Login.js
import { useUserData } from "@/context/UserContext";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../components/UI/Btn";
import Heading from "../components/UI/Heading";
import Input from "../components/UI/Input";
import Label from "../components/UI/Label";
import Paragraph from "../components/UI/Paragraph";

const Login = () => {
  const { login } = useUserData();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await login(formData.email, formData.password);
      router.replace("(home)");
    } catch (error) {
      Alert.alert(
        "Login Failed",
        error.response?.data?.error || "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <StatusBar />
      <View style={{ height: 150 }}>
        <Image
          source={require("@/assets/images/trendBg.png")}
          style={{ height: 400, width: "100%" }}
        />
      </View>

      <View>
        <Image
          source={require("@/assets/images/penguin-bg.png")}
          style={{
            width: "100%",
            height: 800,
            position: "absolute",
            zIndex: 10,
          }}
        />
      </View>
      <ImageBackground
        source={require("@/assets/images/loginbg.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View
          style={{
            flex: 1,
            //backgroundColor: "#8B5CF6",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            position: "relative",
          }}
        >
          <View style={{ paddingHorizontal: 28, paddingTop: 50 }}>
            <View style={{ marginBottom: 48 }}>
              <Heading level={1}>Sign In</Heading>
              <Paragraph>Please Sign in to continue</Paragraph>
            </View>

            <View>
              <Image
                source={require("@/assets/images/linque-logo-hd.png")}
                style={{
                  width: 176,
                  height: 176,
                  position: "absolute",
                  bottom: 100,
                  right: 0,
                }}
              />
            </View>

            <View style={{ gap: 24 }}>
              <Label>Username/Email</Label>
              <Input
                label="Email"
                placeholder="Enter your email"
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Label>Password</Label>

              <Input
                label="Password"
                placeholder="Enter your password"
                value={formData.password}
                onChangeText={(text) => handleChange("password", text)}
                secureTextEntry
              />
            </View>

            <View style={{ zIndex: 50, marginTop: 24 }}>
              <Button
                title={loading ? "Signing In..." : "Log In"}
                onPress={handleLogin}
                disabled={loading}
              />
            </View>

            <View style={{ marginTop: 32, alignItems: "center" }}>
              <TouchableOpacity>
                <Paragraph style={{ fontSize: 14 }}>Forgot Password?</Paragraph>
              </TouchableOpacity>

              <View style={{ flexDirection: "row", marginTop: 32 }}>
                <Text style={{ color: "white", fontSize: 14 }}>
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => router.navigate("/Signup")}>
                  <Text
                    style={{ color: "white", fontSize: 14, fontWeight: "600" }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* <StatusBar />
      <View style={{ height: 150 }}>
        <Image
          source={require("@/assets/images/trendBg.png")}
          style={{ height: 400, width: "100%" }}
        />
      </View>

      <View>
        <Image
          source={require("@/assets/images/penguin-bg.png")}
          style={{ width: "100%", height: 800, position: "absolute", zIndex: 10 }}
        />
      </View>

      <View style={{
        flex: 1,
        backgroundColor: "#8B5CF6",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: "relative",
      }}>
        <View style={{ paddingHorizontal: 28, paddingTop: 50 }}>
          <View style={{ marginBottom: 48 }}>
            <Heading level={1}>Sign In</Heading>
            <Paragraph>Please Sign in to continue</Paragraph>
          </View>

          <View style={{ gap: 24 }}>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <Input
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChangeText={(text) => handleChange('password', text)}
              secureTextEntry
            />
          </View>

          <View style={{ zIndex: 50, marginTop: 24 }}>
            <Button 
              title={loading ? "Signing In..." : "Log In"} 
              onPress={handleLogin}
              disabled={loading}
            />
          </View>

          <View style={{ marginTop: 32, alignItems: 'center' }}>
            <TouchableOpacity>
              <Paragraph style={{ fontSize: 14 }}>Forgot Password?</Paragraph>
            </TouchableOpacity>
            
            <View style={{ flexDirection: 'row', marginTop: 32 }}>
              <Text style={{ color: "gray", fontSize: 14 }}>
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.navigate("/Signup")}>
                <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "110%",
  },
});

export default Login;
