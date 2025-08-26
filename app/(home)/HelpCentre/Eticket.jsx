// app/HelpCentre/EditBooking.jsx
import { ScrollView, StyleSheet, View } from 'react-native';
import WaitlistList from '../../components/HomeComponents/WaitlistList';
import trending from '../../components/trendingData';
import Heading from '../../components/UI/Heading';
import Paragraph from '../../components/UI/Paragraph';

export default function Eticket() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#fff' }}>
      <Heading style={styles.heading} level={3}>
           How can I share my E-Ticket?
          </Heading>

          <View style={styles.noteBox}>
            <Paragraph style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim dolor quis varius faucibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed dignissim dolor quis.
            </Paragraph>
          </View>
        <WaitlistList data={trending} />

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   heading: {
    color: "#000",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  para: {
    color: "#000000",
    fontSize: 12,
  },

  noteBox: {
    backgroundColor: "rgba(210, 213, 219, 0.25)",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
})
