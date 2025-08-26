import { FontAwesome } from '@expo/vector-icons';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomNav from '../../BottomNav';

const data = [
  {
    id: '1',
    title: 'Aylanto',
    rating: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: require('../../../../assets/images/rest.png'),
  },
  {
    id: '2',
    title: 'Sakura',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: require('../../../../assets/images/rest.png'),
  },
  {
    id: '3',
    title: 'CocoChan',
    rating: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: require('../../../../assets/images/rest.png'),
  },
];

const StarRating = ({ rating }) => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 4 }}>
      {[...Array(5)].map((_, i) => (
        <FontAwesome
          key={i}
          name="star"
          size={16}
          color={i < rating ? '#7C3AED' : '#C4C4C4'}
        />
      ))}
    </View>
  );
};

export default function Restaurants() {
  return (
    <>
    <ScrollView style={{backgroundColor: '#fff'}}>
        <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={{ flex: 1 }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>{item.title}</Text>
            <StarRating rating={item.rating} />
            </View>
            <Text style={styles.note}>Note:</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
          <Image source={item.image} style={styles.image} />
        </View>
      )}
    />
    </ScrollView>
    <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F1F2F3',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    flexDirection: 'row',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  note: {
    fontWeight: '500',
    marginTop: 4,
    color: '#6B7280',
    fontSize: 11,
    textDecorationLine: 'underline'
  },
  desc: {
    fontSize: 14,
    color: '#000',
  },
  image: {
    width: 121,
    height: 116,
    borderRadius: 10,
    marginLeft: 16,
  },
});
