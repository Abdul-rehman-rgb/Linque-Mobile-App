import { useUserData } from "@/context/UserContext";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../components/UI/Btn";
import Heading from "../components/UI/Heading";
import Input from "../components/UI/Input";
import Paragraph from "../components/UI/Paragraph";

const Signup = () => {
  const { signup } = useUserData();
  const [formData, setFormData] = useState({
    fullname: "",
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    phone: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const requiredFields = [
      "fullname",
      "name",
      "email",
      "password",
      "dob",
      "gender",
      "phone",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      Alert.alert("Error", `Please fill in: ${missingFields.join(", ")}`);
      return;
    }

    setLoading(true);
    try {
      await signup({
        fullname: formData.fullname,
        name: formData.name,
        email: formData.email,
        dob: formData.dob,
        gender: formData.gender,
        phone: formData.phone,
        password: formData.password,
      });
      Alert.alert("Success", "Account created!");
      router.replace("(auth)");
    } catch (error) {
      Alert.alert(
        "Signup Failed",
        error.response?.data?.error || "An error occurred during registration"
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
      <ScrollView>
        <View style={{ height: 150 }}>
          <Image
            source={require("@/assets/images/trendBg.png")}
            style={{ height: 400 }}
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
              paddingHorizontal: 28,
              paddingTop: 40,
              minHeight: 600,
            }}
          >
            {/* Penguin logo in white circle */}
            <View
              style={{
                position: "absolute",
                top: -110,
                right: 15,
                zIndex: 10,
              }}
            >
              <Image
                source={require("@/assets/images/pengiun-logo.png")}
                style={{ width: 176, height: 176 }}
                resizeMode="contain"
              />
            </View>

            {/* Header */}
            <View style={{ marginBottom: 32 }}>
              <Heading level={1}>
                Sign Up to <Text style={{ fontWeight: "800" }}>LINQUE</Text>
              </Heading>
              <Paragraph
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Just a few quick things to get started
              </Paragraph>
            </View>

            {/* Form Fields */}
            <View style={{ marginBottom: 24, gap: 16 }}>
              <Input
                placeholder="Full Name"
                value={formData.fullname}
                onChangeText={(text) => handleChange("fullname", text)}
              />
              <Input
                placeholder="Username"
                value={formData.name}
                onChangeText={(text) => handleChange("name", text)}
              />
              <Input
                placeholder="Email Address"
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
              />

              {/* Row: Date of Birth & Gender */}
              <View style={{ flexDirection: "row", gap: 12 }}>
                <Input
                  placeholder="Date of Birth"
                  value={formData.dob}
                  onChangeText={(text) => handleChange("dob", text)}
                  style={{width: '50%'}}
                />
                <Input
                  placeholder="Gender"
                  value={formData.gender}
                  onChangeText={(text) => handleChange("gender", text)}
                  style={{width: '50%'}}
                />
              </View>

              <Input
                placeholder="Phone Number"
                value={formData.phone}
                keyboardType="phone-pad"
                onChangeText={(text) => handleChange("phone", text)}
              />
              <Input
                placeholder="Password"
                value={formData.password}
                onChangeText={(text) => handleChange("password", text)}
                secureTextEntry
              />
              <Input
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChangeText={(text) => handleChange("confirmPassword", text)}
                secureTextEntry
              />
            </View>

            {/* Button */}
            <Button
              title={loading ? "Creating Account..." : "Create Account"}
              onPress={handleSignup}
              disabled={loading}
            />

            {/* Footer */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 16,
                marginTop: 24,
              }}
            >
              <Text style={{ color: "white", fontSize: 15, opacity: 0.8 }}>
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.navigate("/login")}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "700",
                    textDecorationLine: "underline",
                    fontFamily: "poppins-semibold"
                  }}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Signup;
