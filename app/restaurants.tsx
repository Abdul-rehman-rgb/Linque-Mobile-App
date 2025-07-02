import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import {
    ArrowLeft,
    Heart,
    Search,
    SlidersHorizontal,
    Star,
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import HomeStories from "./components/HomeComponents/HomeStories";


export default function Restaurants() {
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const router = useRouter();

  const restaurants = [
    {
      id: 1,
      name: 'Restaurant 1',
      cuisine: 'Pan-Asian',
      discount: '40% Off',
      image:
        'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Restaurant 2',
      cuisine: 'Italian',
      discount: null,
      image:
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
    },
    {
      id: 3,
      name: 'Ocean View',
      cuisine: 'Seafood',
      discount: '25% Off',
      image:
        'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Spice Garden',
      cuisine: 'Indian',
      discount: null,
      image:
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.2,
    },
    {
      id: 5,
      name: 'Urban Bistro',
      cuisine: 'Continental',
      discount: '30% Off',
      image:
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
    },
  ];

  const handleBack = () => router.back();
  const handleSearch = (text: string) => setSearchText(text);
  const handleFilter = () => Alert.alert('Filter', 'Filter functionality would open here!');

  const toggleFavorite = (restaurantId: number) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(restaurantId) ? newFavorites.delete(restaurantId) : newFavorites.add(restaurantId);
    setFavorites(newFavorites);
  };

  const handleBookNow = (restaurant: { id: number; name: string; image: string }) => {
    router.push({
      pathname: "/components/RestaurantDetails" as const,
      params: {
        id: restaurant.id.toString(),
        name: restaurant.name,
        image: restaurant.image,
      },
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white'}
      />
    ));
  };

  return (
    <View className="flex-1 bg-gray-900 relative">
      {/* Header */}
      <View className="bg-[#8B5CF6] pt-12 pb-6 px-5 rounded-b-3xl z-10">
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity onPress={handleBack} className="flex-row items-center">
            <ArrowLeft size={24} color="white" />
            <Text className="text-white text-lg font-medium ml-2">Back</Text>
          </TouchableOpacity>
          <Text className="text-white text-xl text-center font-bold">Restaurants</Text>
          <View className="w-8" />
        </View>

        {/* Search */}
        <View className="flex-row items-center bg-white/20 rounded-full px-4 py-3">
          <Search size={20} color="white" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="white"
            value={searchText}
            onChangeText={handleSearch}
            className="flex-1 text-white text-base ml-3"
          />
          <TouchableOpacity onPress={handleFilter} className="ml-2">
            <SlidersHorizontal size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* HomeStories Section */}
      <HomeStories />

      {/* Content */}
      <ScrollView className="px-4 pb-36 bg-white py-4">
        {restaurants.map((restaurant) => (
          <View
            key={restaurant.id}
            className="mb-4 rounded-2xl overflow-hidden bg-black/80 shadow-lg"
          >
            <View className="relative">
              <Image source={{ uri: restaurant.image }} className="w-full h-48" />

              {restaurant.discount && (
                <View className="absolute top-4 left-4 bg-purple-600 px-3 py-1 rounded-full">
                  <Text className="text-white text-xs font-semibold">{restaurant.discount}</Text>
                </View>
              )}

              <TouchableOpacity
                onPress={() => toggleFavorite(restaurant.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/30 rounded-full items-center justify-center"
              >
                <Heart
                  size={20}
                  className={
                    favorites.has(restaurant.id)
                      ? 'text-white fill-red-500'
                      : 'text-white'
                  }
                />
              </TouchableOpacity>
            </View>

            <View className="p-4">
              <View className="flex-row justify-between items-start mb-2">
                <View className="flex-1">
                  <Text className="text-white text-lg font-bold mb-1">
                    {restaurant.name}
                  </Text>
                  <Text className="text-gray-400 text-sm">{restaurant.cuisine}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleBookNow(restaurant)}
                  className="bg-purple-600 px-6 py-2 rounded-full"
                >
                  <Text className="text-white font-semibold">Book Now</Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center mt-2">
                <View className="flex-row space-x-1">{renderStars(restaurant.rating)}</View>
                <Text className="text-gray-400 text-sm ml-2">{restaurant.rating}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between bg-black rounded-t-3xl px-6 py-3 z-50">
        <View className="flex-row items-center gap-2">
          <Image
            source={require("../assets/images/pengiun-logo.png")}
            className="w-12 h-12"
          />
          <View>
            <Text className="text-white font-extrabold text-lg leading-5">
              LINQUE
            </Text>
            <Text className="text-white text-xs opacity-70 -mt-1">
              Elevate Your Outings
            </Text>
          </View>
        </View>
        <TouchableOpacity className="items-center">
          <FontAwesome5 name="headset" size={24} color="#fff" />
          <Text className="text-white text-xs mt-1">Help Centre</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="settings" size={26} color="#fff" />
          <Text className="text-white text-xs mt-1">Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
