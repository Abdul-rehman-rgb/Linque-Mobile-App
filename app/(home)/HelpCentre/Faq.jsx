// screens/HelpCentre.js

import { useState } from 'react';
import {
    FlatList,
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const faqData = [
  {
    id: '1',
    question: 'Can I edit my Booking?',
    answer: 'Yes, you can edit your booking from the Edit Booking screen under Help Centre.',
  },
  {
    id: '2',
    question: 'Can I cancel my Booking?',
    answer: 'Yes, you can cancel your booking up to 24 hours before the trip.',
  },
  {
    id: '3',
    question: 'How can I share my E-Ticket?',
    answer: 'You can share your E-Ticket using WhatsApp, email, or SMS directly from the app.',
  },
  {
    id: '4',
    question: 'How can I get a refund?',
    answer: 'Refunds are processed automatically after successful cancellation.',
  },
  {
    id: '5',
    question: 'Invite Friends?',
    answer: 'Go to the Invite section and share your referral code.',
  },
  {
    id: '6',
    question: 'General FAQ’s',
    answer: 'Visit the FAQ page for more information on app features.',
  },
];

const Faq = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  const renderItem = ({ item }) => {
    const isExpanded = item.id === expandedId;
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.item}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.arrow}>{isExpanded ? '˄' : '˅'}</Text>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      <FlatList
        data={faqData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 12,
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  question: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  arrow: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
  },
  answerContainer: {
    marginTop: 8,
    paddingLeft: 8,
  },
  answer: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});
