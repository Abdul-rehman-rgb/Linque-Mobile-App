import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CustomerHome() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    router.replace('/login');
  };

  const stats = [
    { title: 'Total Orders', value: '24', icon: 'shopping-cart' },
    { title: 'Messages', value: '5', icon: 'message' },
    { title: 'Wishlist', value: '12', icon: 'favorite' },
    { title: 'Rewards', value: '850', icon: 'star' },
  ];

  const recentActivities = [
    { id: '1', name: 'Order #1234', status: 'Delivered', time: '2 hours ago' },
    { id: '2', name: 'Order #5678', status: 'Shipping', time: '1 day ago' },
    { id: '3', name: 'Payment Received', status: 'Completed', time: '2 days ago' },
  ];

  return (
    <LinearGradient colors={['#f5f0ff', '#e8dfff', '#f5f0ff']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.username}>Hibbans</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={28} color="#9b59b6" />
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <LinearGradient
            key={index}
            colors={['rgba(255, 255, 255, 0.7)', 'rgba(245, 240, 255, 0.7)']}
            style={styles.statCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.statIconContainer}>
              <MaterialIcons name={stat.icon} size={24} color="#9b59b6" />
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statTitle}>{stat.title}</Text>
          </LinearGradient>
        ))}
      </ScrollView>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="shopping-bag" size={28} color="#fff" />
            <Text style={styles.actionText}>New Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="support-agent" size={28} color="#fff" />
            <Text style={styles.actionText}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="card-giftcard" size={28} color="#fff" />
            <Text style={styles.actionText}>Rewards</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <View style={styles.activitiesContainer}>
          {recentActivities.map(activity => (
            <View key={activity.id} style={styles.activityCard}>
              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>{activity.name}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
              <View style={[
                styles.statusBadge,
                activity.status === 'Delivered' && { backgroundColor: '#e8f5e9' },
                activity.status === 'Shipping' && { backgroundColor: '#fff8e1' },
              ]}>
                <Text style={[
                  styles.statusText,
                  activity.status === 'Delivered' && { color: '#4caf50' },
                  activity.status === 'Shipping' && { color: '#ff9800' },
                ]}>
                  {activity.status}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Special Offer Card */}
      <LinearGradient
        colors={['#9b59b6', '#8e44ad']}
        style={styles.offerCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.offerContent}>
          <Text style={styles.offerTitle}>Special Offer!</Text>
          <Text style={styles.offerText}>Get 20% off your next purchase. Limited time only.</Text>
          <TouchableOpacity style={styles.offerButton}>
            <Text style={styles.offerButtonText}>Claim Now</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/869/869869.png' }}
          style={styles.offerImage}
        />
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  greeting: { fontSize: 18, color: '#555' },
  username: { fontSize: 26, fontWeight: '700', color: '#333', marginTop: 5 },
  logoutButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsContainer: { marginBottom: 30 },
  statCard: {
    width: 150,
    height: 150,
    borderRadius: 20,
    padding: 20,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: '#9b59b6',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
  },
  statIconContainer: {
    backgroundColor: 'rgba(155, 89, 182, 0.1)',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: { fontSize: 28, fontWeight: '700', color: '#333' },
  statTitle: { fontSize: 14, color: '#666', marginTop: 5 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#333', marginBottom: 15 },
  actionsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  actionButton: {
    backgroundColor: '#9b59b6',
    borderRadius: 15,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#9b59b6',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  actionText: { color: '#fff', fontWeight: '600', marginTop: 8 },
  activitiesContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(155, 89, 182, 0.1)',
  },
  activityCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(155, 89, 182, 0.1)',
  },
  activityInfo: { flex: 1 },
  activityName: { fontSize: 16, fontWeight: '600', color: '#333' },
  activityTime: { fontSize: 14, color: '#777', marginTop: 4 },
  statusBadge: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  statusText: { fontSize: 14, fontWeight: '600' },
  offerCard: {
    borderRadius: 25,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowColor: '#8e44ad',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  offerContent: { flex: 1 },
  offerTitle: { fontSize: 22, fontWeight: '800', color: '#fff', marginBottom: 10 },
  offerText: { fontSize: 16, color: '#f0eafa', marginBottom: 20, lineHeight: 24 },
  offerButton: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  offerButtonText: { color: '#9b59b6', fontWeight: '700' },
  offerImage: { width: 100, height: 100, marginLeft: 15 },
});
