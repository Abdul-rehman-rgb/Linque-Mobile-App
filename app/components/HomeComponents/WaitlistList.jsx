// components/WaitlistList.js
import { FlatList } from "react-native";
import WaitlistCard from "./WaitlistCard";

const WaitlistList = ({ data, MoveTo }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <WaitlistCard
          label={item.label}
          startDate={item.startDate}
          onBookPress={() => MoveTo(item)}
        />
      )}
      contentContainerStyle={{ paddingRight: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default WaitlistList;
