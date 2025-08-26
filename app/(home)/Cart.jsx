import { StyleSheet, View } from 'react-native'
import BottomNav from '../components/BottomNav'
import WaitlistList from '../components/HomeComponents/WaitlistList'
import trending from '../components/trendingData'

const Cart = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 16, marginTop: 10}}>
              <WaitlistList data={trending} />
<BottomNav />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})