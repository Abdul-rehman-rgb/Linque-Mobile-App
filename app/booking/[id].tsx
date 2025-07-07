import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react-native';
import React, { useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

const { width } = Dimensions.get('window');

const BookingScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('2025/02/13');
  const [selectedTime, setSelectedTime] = useState('12:30 PM');
  const [seats, setSeats] = useState(3);
  const [promo, setPromo] = useState('');
  const [note, setNote] = useState('');

  const times = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM'];

  const goBack = () => router.back();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-[#8B5CF6] rounded-b-3xl pb-6 pt-12 px-5">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={goBack} className="flex-row items-center">
            <ArrowLeft size={24} color="white" />
            <Text className="text-white text-lg ml-2">Back</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-white text-2xl font-bold text-center mt-2">
          Restaurant {id}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Date Picker */}
        <View className="mt-6 px-4">
          <DatePicker
            mode="calendar"
            selected={selectedDate}
            onSelectedChange={setSelectedDate}
            options={{
              backgroundColor: 'white',
              textHeaderColor: '#8B5CF6',
              selectedTextColor: '#fff',
              mainColor: '#8B5CF6',
              textSecondaryColor: '#000',
              borderColor: 'transparent',
            }}
          />
        </View>

        {/* Time Selection */}
        <View className="px-6 mt-4">
          <Text className="text-center text-[#8B5CF6] font-bold mb-2">🕐 Time</Text>
          <View className="flex-row items-center justify-between bg-gray-100 py-3 px-4 rounded-full">
            <TouchableOpacity
              onPress={() => {
                const i = times.indexOf(selectedTime);
                setSelectedTime(times[Math.max(0, i - 1)]);
              }}
            >
              <ChevronLeft size={24} color="#8B5CF6" />
            </TouchableOpacity>
            <Text className="text-lg text-[#8B5CF6] font-semibold">
              {selectedTime}
            </Text>
            <TouchableOpacity
              onPress={() => {
                const i = times.indexOf(selectedTime);
                setSelectedTime(times[Math.min(times.length - 1, i + 1)]);
              }}
            >
              <ChevronRight size={24} color="#8B5CF6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Seats Selection */}
        <View className="px-6 mt-4">
          <Text className="text-center text-[#8B5CF6] font-bold mb-2">👥 Seats</Text>
          <View className="flex-row items-center justify-between bg-gray-100 py-3 px-4 rounded-full">
            <TouchableOpacity onPress={() => setSeats(Math.max(1, seats - 1))}>
              <ChevronLeft size={24} color="#8B5CF6" />
            </TouchableOpacity>
            <Text className="text-lg text-[#8B5CF6] font-semibold">
              {seats.toString().padStart(2, '0')}
            </Text>
            <TouchableOpacity onPress={() => setSeats(seats + 1)}>
              <ChevronRight size={24} color="#8B5CF6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Promo Code */}
        <View className="px-6 mt-6">
          <Text className="text-[#8B5CF6] font-bold mb-1">Promo Code</Text>
          <TextInput
            value={promo}
            onChangeText={setPromo}
            placeholder="********"
            className="bg-gray-100 px-4 py-3 rounded-full text-gray-800"
          />
        </View>

        {/* Note */}
        <View className="px-6 mt-6">
          <Text className="text-[#8B5CF6] font-bold mb-1">Note for Restaurant:</Text>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Optional note..."
            multiline
            numberOfLines={3}
            className="bg-gray-100 px-4 py-3 rounded-2xl text-gray-800"
          />
        </View>

        {/* Button */}
        <View className="px-6 mt-8">
          <TouchableOpacity className="bg-[#8B5CF6] py-4 rounded-full items-center">
            <Text className="text-white font-bold text-lg">Check Availability</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <SafeAreaView className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between bg-black rounded-t-3xl px-6 py-3">
        <View className="flex-row items-center gap-2">
          <View className="bg-white w-12 h-12 rounded-full items-center justify-center">
            <Text className="text-[#8B5CF6] font-bold">🐧</Text>
          </View>
          <View>
            <Text className="text-white font-extrabold text-lg leading-5">LINQUE</Text>
            <Text className="text-white text-xs opacity-70 -mt-1">
              Elevate Your Outings
            </Text>
          </View>
        </View>
        <TouchableOpacity className="items-center">
          <Text className="text-white">Help Centre</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-white">Settings</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default BookingScreen;