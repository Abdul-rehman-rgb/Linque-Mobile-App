import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Heart } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

// Centralized restaurant data array for easy management of multiple restaurants
const restaurants = [
  {
    id: '1',
    name: 'Restaurant 1',
    type: 'Pan-Asian',
    mainImage: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor quis verius faucibus. Mauris sit amet turpis suscipit, convallis felis ac, volutpate massa.',
    chips: ['Above 12 years', '5 Km away', '10 Km', 'Seats Available'],
    address: 'Creek Side, Abdul Sattar Edhi Ave, D.H.A, Phase 8 Zone C, Phase 8 Karachi, Sindh 75500',
    timings: {
      Mon: '12pm to 11pm',
      Tue: '12pm to 11pm',
      Wed: '12pm to 11pm',
      Thu: '12pm to 11pm',
      Fri: '12pm to 11pm',
      Sat: '12pm to 12am',
      Sun: '12pm to 11pm',
    },
    deals: [
      { title: 'Linque Deals', description: 'Use Promo Code: PAN20' },
      { title: 'Visa Weekend', description: '25% off on Visa Cards', sub: 'Fri-Sun' },
    ],
    menuImage: 'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    name: 'Restaurant 2',
    type: 'Italian',
    mainImage: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor quis verius faucibus. Mauris sit amet turpis suscipit, convallis felis ac, volutpate massa.',
    chips: ['Family Friendly', '3 Km away', '10 mins', 'Seats Available'],
    address: 'Creek Side, Abdul Sattar Edhi Ave, D.H.A, Phase 8 Zone C, Phase 8 Karachi, Sindh 75500',
    timings: {
      Mon: '12pm to 11pm',
      Tue: '12pm to 11pm',
      Wed: '12pm to 11pm',
      Thu: '12pm to 11pm',
      Fri: '12pm to 11pm',
      Sat: '12pm to 12am',
      Sun: '12pm to 11pm',
    },
    deals: [
      { title: 'Lunch Special', description: '20% off all lunch items' },
      { title: 'Wine Night', description: 'Free wine with entrée', sub: 'Fridays' },
    ],
    menuImage: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    name: 'Ocean View',
    type: 'Seafood',
    mainImage: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1335786/pexels-photo-1335786.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor quis verius faucibus. Mauris sit amet turpis suscipit, convallis felis ac, volutpate massa.',
    chips: ['Kids Allowed', '8 Km away', '20 mins', 'Seats Available'],
    address: 'Creek Side, Abdul Sattar Edhi Ave, D.H.A, Phase 8 Zone C, Phase 8 Karachi, Sindh 75500',
    timings: {
      Mon: '12pm to 11pm',
      Tue: '12pm to 11pm',
      Wed: '12pm to 11pm',
      Thu: '12pm to 11pm',
      Fri: '12pm to 11pm',
      Sat: '12pm to 12am',
      Sun: '12pm to 11pm',
    },
    deals: [
      { title: 'BBQ Night', description: 'Buy 1 Get 1 Free on platters' },
      { title: 'Family Deal', description: 'Free dessert for 4+ people', sub: 'Weekends' },
    ],
    menuImage: 'https://images.pexels.com/photos/1335786/pexels-photo-1335786.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    name: 'Spice Garden',
    type: 'Indian',
    mainImage: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/573285/pexels-photo-573285.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor quis verius faucibus. Mauris sit amet turpis suscipit, convallis felis ac, volutpate massa.',
    chips: ['Vegan Friendly', '5 Km away', '12 mins', 'Seats Available'],
    address: 'Creek Side, Abdul Sattar Edhi Ave, D.H.A, Phase 8 Zone C, Phase 8 Karachi, Sindh 75500',
    timings: {
      Mon: '12pm to 11pm',
      Tue: '12pm to 11pm',
      Wed: '12pm to 11pm',
      Thu: '12pm to 11pm',
      Fri: '12pm to 11pm',
      Sat: '12pm to 12am',
      Sun: '12pm to 11pm',
    },
    deals: [
      { title: 'Healthy Deal', description: '15% off on green bowls' },
      { title: 'Smoothie Hour', description: 'Buy 1 Get 1 Free', sub: '3pm to 5pm' },
    ],
    menuImage: 'https://images.pexels.com/photos/573285/pexels-photo-573285.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    name: 'Urban Bistro',
    type: 'Continental',
    mainImage: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor quis verius faucibus. Mauris sit amet turpis suscipit, convallis felis ac, volutpate massa.',
    chips: ['Oceanfront', '10 Km away', '25 mins', 'Seats Available'],
    address: 'Creek Side, Abdul Sattar Edhi Ave, D.H.A, Phase 8 Zone C, Phase 8 Karachi, Sindh 75500',
    timings: {
      Mon: '12pm to 11pm',
      Tue: '12pm to 11pm',
      Wed: '12pm to 11pm',
      Thu: '12pm to 11pm',
      Fri: '12pm to 11pm',
      Sat: '12pm to 12am',
      Sun: '12pm to 11pm',
    },
    deals: [
      { title: 'Ocean Deal', description: 'Free drink with any platter' },
      { title: 'Weekend Combo', description: '20% off on combo meals', sub: 'Sat-Sun' },
    ],
    menuImage: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];


const RestaurantDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const restaurant = restaurants.find(r => r.id === id) || restaurants[0];
  const handleBack = () => router.back();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <SafeAreaView className="bg-[#8B5CF6] rounded-b-[40px] pb-6 pt-12 px-5 relative overflow-hidden z-50">
        <View className="flex-row justify-between items-center z-10">
          <TouchableOpacity onPress={handleBack} className="flex-row items-center">
            <ArrowLeft size={24} color="white" />
            <Text className="text-white text-lg font-medium ml-2">Back</Text>
          </TouchableOpacity>
          <View className="flex items-center justify-center">
            <Text className="text-white text-xl font-bold">{restaurant.name}</Text>
          </View>
          <View className="flex items-center">
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              <Heart
                size={24}
                className={isFavorite ? 'text-white fill-white' : 'text-white'}
              />
            </TouchableOpacity>
            <Text className="text-white text-xs mt-1">Favourite</Text>
          </View>
        </View>
      </SafeAreaView>

      {/* Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Image */}
        <View className="px-4 mt-6">
          <Image
            source={{ uri: restaurant.mainImage }}
            className="w-full h-48 rounded-2xl"
            resizeMode="cover"
          />
        </View>

        {/* Gallery */}
        <ScrollView
          horizontal
          className="mt-4 px-4"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 16 }}
        >
          {restaurant.gallery.map((img, i) => (
            <TouchableOpacity key={i} className="mr-2">
              <Image
                source={{ uri: img }}
                className="w-16 h-16 rounded-lg"
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Details */}
        <View className="px-4 mt-6">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-2xl font-bold text-black">{restaurant.name}</Text>
            <View className="bg-gray-200 px-3 py-1 rounded-full">
              <Text className="text-sm font-medium text-gray-700">{restaurant.type}</Text>
            </View>
          </View>

          <Text className="text-sm text-gray-600 mb-4 leading-5">
            {restaurant.description}
          </Text>

          {/* Chips */}
          <View className="flex-row flex-wrap gap-2 mb-4">
            {restaurant.chips.map((chip, i) => (
              <View key={i} className="bg-gray-100 px-3 py-2 rounded-full flex-row items-center">
                <View className="w-1 h-1 bg-gray-500 rounded-full mr-2" />
                <Text className="text-xs text-gray-700">{chip}</Text>
              </View>
            ))}
          </View>

          {/* Address */}
          <View className="mb-6">
            <Text className="text-sm font-semibold text-black mb-1">Address:</Text>
            <Text className="text-sm text-gray-600 leading-5">{restaurant.address}</Text>
          </View>

          {/* Deals & Menu */}
          <View className="flex-row gap-4 mb-6">
            <TouchableOpacity
              className="bg-[#8B5CF6] rounded-2xl p-4 flex-1"
              onPress={() => setModalVisible(true)}
            >
              <View className="flex-row items-center mb-2">
                <View className="w-6 h-6 bg-white rounded-full items-center justify-center mr-2">
                  <Text className="text-[#8B5CF6] text-xs font-bold">%</Text>
                </View>
                <Text className="text-white font-bold text-sm">Deals & Discounts</Text>
              </View>
            </TouchableOpacity>

            <View className="bg-gray-50 rounded-2xl p-4 flex-1 items-center">
              <View className="flex-row items-center mb-2">
                <View className="w-6 h-6 bg-gray-300 rounded-full items-center justify-center mr-2">
                  <Text className="text-gray-600 text-xs font-bold">📋</Text>
                </View>
                <Text className="text-gray-800 font-bold text-sm">Menu</Text>
              </View>
              <Image
                source={{ uri: restaurant.menuImage }}
                className="w-20 h-24 rounded-lg mt-2"
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Timings */}
          <View className="bg-gray-50 rounded-2xl p-4 mb-6">
            <View className="flex-row items-center mb-3">
              <View className="w-6 h-6 bg-gray-300 rounded-full items-center justify-center mr-2">
                <Text className="text-gray-600 text-xs font-bold">🕐</Text>
              </View>
              <Text className="font-bold text-gray-800">Timings</Text>
            </View>
            {Object.entries(restaurant.timings).map(([day, time]) => (
              <View key={day} className="flex-row justify-between py-1">
                <Text className="text-sm text-gray-600">{day}:</Text>
                <Text className="text-sm text-gray-800 font-medium">{time}</Text>
              </View>
            ))}
          </View>

          {/* Book Button */}
          <TouchableOpacity
            className="bg-[#8B5CF6] py-4 rounded-full items-center mb-8"
            onPress={() => router.push(`/booking/${restaurant.id}`)}
          >
            <Text className="text-white font-bold text-lg">Book your Reservation</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <SafeAreaView className="absolute bottom-0 left-0 right-0 bg-black rounded-t-3xl px-6 py-3 z-50 flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <Image
            source={require('../../assets/images/pengiun-logo.png')}
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
      </SafeAreaView>

      {/* Modal for Deals */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl p-6 shadow-xl max-h-[80%]">
            <View className="w-12 h-1 bg-gray-300 rounded-full self-center mb-4" />
            <Text className="text-xl font-bold mb-6 text-center text-gray-800">
              Deals & Discounts
            </Text>
            {restaurant.deals.map((deal, i) => (
              <View
                key={i}
                className="bg-purple-50 border border-purple-200 p-4 rounded-xl mb-4"
              >
                <Text className="text-purple-900 font-bold text-lg mb-1">{deal.title}</Text>
                <Text className="text-gray-700 text-sm mb-1">{deal.description}</Text>
                {deal.sub && (
                  <Text className="text-purple-600 text-xs font-medium bg-purple-100 px-2 py-1 rounded-full self-start">
                    {deal.sub}
                  </Text>
                )}
              </View>
            ))}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="bg-[#8B5CF6] py-3 rounded-full items-center mt-4"
            >
              <Text className="text-white font-semibold text-lg">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RestaurantDetails;