// @ts-nocheck
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeStories() {

  const trending = [
    {
      label: "Aylanto",
      img: {
        uri: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "BYOT",
      img: {
        uri: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "KMF",
      img: {
        uri: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
  ];
  

  return (
    <>
      <View className="">
        <View className="h-[190px] -mt-[35px]">
          <Image
            source={require("../../../assets/images/gray-bg-3.avif")}
            className="h-full "
          />
        </View>

        <View className="absolute top-[10px] left-0 right-0 bottom-0 z-10">
          <View className="flex-row justify-between items-center mb-2 px-5">
            <Text className="text-lg font-bold text-white drop-shadow ">
              Top Trending
            </Text>
            <TouchableOpacity>
              <Text className="text-white underline font-semibold">
                Explore More
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row gap-4 px-5 pt-2 pb-4 "
          >
            {trending?.map((item, idx) => (
              <View key={idx} className="items-center mr-4">
                <View className="w-20 h-20 rounded-full border-4 border-white overflow-hidden mb-2 ">
                  <Image
                    source={item.img}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                <Text className="text-white font-semibold text-xs text-center drop-shadow">
                  {item.label}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
