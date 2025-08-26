// context/UserContext.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const API_BASE = "http://192.168.21.11:5000"; 
const UserContext = createContext();

export const useUserData = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [UserId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAuthHeaders = async () => {
    const token = await AsyncStorage.getItem("auth_token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE}/api/auth/login`, { email, password });
      await AsyncStorage.setItem("auth_token", res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      console.error("Login error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE}/api/auth/signup`, userData);
      await AsyncStorage.setItem("auth_token", res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      console.error("Signup error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async (id) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("auth_token");
      const response = await axios.get(
        `${API_BASE}/api/auth/getuser/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        setUser(response.data.user);
        return response.data.user;
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  const bookReservation = async (reservationData) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("auth_token");
      const response = await axios.post(
        `${API_BASE}/api/reservation/reservations`,
        reservationData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Book reservation error:", error.response?.data || error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (updates) => {
    try {
      setLoading(true);
      const headers = await getAuthHeaders();
      const res = await axios.put(
        `${API_BASE}/api/auth/updateuser/${user._id}`,
        updates,
        { headers }
      );
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      console.error("Update user error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("auth_token");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        UserId,
        setUserId,
        fetchUser,
        login,
        signup,
        updateUser,
        bookReservation,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
