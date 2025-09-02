import { useUserData } from "@/context/UserContext";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import EditableInput from "../components/UI/EditableInput";
import LightBtn from "../components/UI/LightBtn";

export default function Profile() {
  const {id} = useLocalSearchParams();
  const { user, fetchUser, updateUser, loading: ctxLoading } = useUserData();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    fullname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    age: "",
    cnic: "",
    password: ""
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        // Fetch fresh data if needed (or use context data directly)
        const userData = user || await fetchUser();
        setForm({
          name: userData?.username || userData?.name || "",
          fullname: userData?.fullname || userData?.fullName || "",
          email: userData?.email || "",
          phone: userData?.phone || "",
          dob: userData?.dob || "",
          gender: userData?.gender || "",
          age: userData?.age ? String(userData.age) : "",
          cnic: userData?.cnic || "",
          password: ""
        });
      } catch (err) {
        console.error("Profile load error:", err);
        Alert.alert("Error", "Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [user]);

  console.log(user);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const { password, ...updateData } = form;
      const payload = {
        ...updateData,
        ...(password && { password })
      };

      await updateUser(payload);
      Alert.alert("Success", "Profile updated successfully");
    } catch (err) {
      console.error("Update error:", err);
      Alert.alert(
        "Update Failed",
        err.response?.data?.error || "Could not update profile"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading || ctxLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <EditableInput 
            value={form.name}
            onChangeText={(t) => handleChange('name', t)}
            placeholder="Enter your full name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <EditableInput
            value={form.fullname}
            onChangeText={(t) => handleChange('fullname', t)}
            placeholder="Enter username"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <EditableInput
            value={form.email}
            onChangeText={(t) => handleChange('email', t)}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mobile Number</Text>
          <EditableInput
            value={form.phone}
            onChangeText={(t) => handleChange('phone', t)}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date of Birth</Text>
          <EditableInput
            value={form.dob}
            onChangeText={(t) => handleChange('dob', t)}
            placeholder="YYYY-MM-DD"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender</Text>
          <EditableInput
            value={form.gender}
            onChangeText={(t) => handleChange('gender', t)}
            placeholder="Male/Female/Other"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <EditableInput
            value={form.password}
            onChangeText={(t) => handleChange('password', t)}
            placeholder="Enter new password"
            secureTextEntry
          />
        </View>

        <View style={styles.saveButtonContainer}>
          <LightBtn 
            title="Save Changes" 
            onPress={handleSave}
            disabled={loading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 100
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20
  },
  inputGroup: {
    marginBottom: 5
  },
  label: {
    color: "#000",
    fontSize: 17,
    marginBottom: 4,
    fontFamily: "poppins-semibold"
  },
  saveButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});