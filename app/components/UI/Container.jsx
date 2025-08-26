import { SafeAreaView, StyleSheet } from 'react-native'

const Container = () => {
  return (
     <SafeAreaView style={styles.container}></SafeAreaView>
  )
}

export default Container

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
})