// app/HelpCentre/index.jsx
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const faqData = [
  { id: '1', question: 'Can I edit my Booking?', route: '/HelpCentre/EditBooking' },
  // other items...
];

const HelpCentre = () => {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => item.route && router.push(item.route)}
    >
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>How may we assist you?</Text>
      <FlatList
        data={faqData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HelpCentre;

// ...styles same as before


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // header: {
  //   backgroundColor: '#6A14DC',
  //   paddingTop: 50,
  //   paddingBottom: 20,
  //   paddingHorizontal: 20,
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  // },
  // back: {
  //   color: '#fff',
  //   fontSize: 16,
  //   marginBottom: 5,
  // },
  // headerTitle: {
  //   color: '#fff',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  // },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 0.6,
    borderBottomColor: '#ddd',
  },
  question: {
    fontSize: 15,
    color: '#000',
  },
  arrow: {
    fontSize: 18,
    color: '#000',
  },
});
