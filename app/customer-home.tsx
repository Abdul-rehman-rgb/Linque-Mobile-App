import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HomeStories from "./components/HomeComponents/HomeStories";

const hubCards = [
  {
    title: "Restaurants",
    subtitle: "Reserve a seat at your favourite fine-dining restaurants",
    img: {
      uri: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80",
    },
  },
  {
    title: "Activities",
    subtitle: "Plan your next adventure",
    img: {
      uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
  },
  {
    title: "Venues",
    subtitle: "Find the ideal location for your outings",
    img: {
      uri: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
  },
  {
    title: "Live Events",
    subtitle: "Book your event passes",
    img: {
      uri: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80",
    },
  },
];

export default function CustomerHome() {
  const router = useRouter();

  return (
    <View className="flex-1 ">
      {/* Header */}
      <View className="bg-[#8B5CF6] rounded-b-[40px] pb-6 pt-12 px-5 relative overflow-hidden z-50">
        {/* Penguin watermark */}
        <Image
          source={require("../assets/images/pengiun-logo.png")}
          className="absolute right-0 top-0 w-40 h-40 opacity-10"
          style={{ zIndex: 0 }}
        />
        <View className="flex-row justify-between items-center z-10">
          <View>
            <TouchableOpacity>
              <MaterialIcons name="menu" size={32} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="flex items-center justify-center">
            <Text className="text-white text-2xl font-extrabold">
              Welcome Asad
            </Text>
            <TouchableOpacity className="flex-row items-center bg-[#1B3C2F] px-4 py-1 rounded-full mt-2 ">
              <Ionicons name="location-sharp" size={18} color="#fff" />
              <Text className="text-white ml-2">Karachi</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center gap-2">
            <TouchableOpacity className="relative">
              <Ionicons name="notifications" size={28} color="#fff" />
              <View className="absolute -top-1 -right-1 bg-white rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-xs text-[#8B5CF6] font-bold">2</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <HomeStories />

      {/* HUB Section */}
      <View className="flex-1 bg-white mt-6 rounded-t-3xl px-5 ">
        <Text className="text-2xl font-extrabold text-gray-900 mb-4 text-center tracking-wide">
          HUB
        </Text>
        <View className="flex-row flex-wrap justify-between gap-y-6">
          {hubCards.map((card, idx) => (
            <View
              key={idx}
              className="w-[48%] bg-black rounded-2xl overflow-hidden shadow-lg mb-2 relative"
            >
              <Image
                source={card.img}
                className="w-full h-32"
                resizeMode="cover"
              />
              <View className="absolute top-2 right-2 bg-[#8B5CF6] rounded-full px-3 py-1">
                <Text className="text-white text-xs font-bold">
                  +10 Options
                </Text>
              </View>
              <View className="p-4">
                <Text className="text-white text-lg font-bold mb-1">
                  {card.title}
                </Text>
                <Text className="text-white text-xs mb-4 opacity-80">
                  {card.subtitle}
                </Text>
                <TouchableOpacity className="bg-[#8B5CF6] rounded-full py-2 px-4 self-start">
                  <Text className="text-white font-bold text-sm">Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

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
