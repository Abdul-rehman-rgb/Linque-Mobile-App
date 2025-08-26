import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const LightBtn = ({ title = "Ok", onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LightBtn;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#E5E6E9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
