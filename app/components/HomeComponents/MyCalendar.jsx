import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <Calendar
        // Initially visible month. Default = now
        current={new Date().toISOString().split('T')[0]}

        // Minimum date that can be selected
        minDate={'2022-01-01'}

        // Handler which gets executed on day press
        onDayPress={(day) => {
          console.log('Selected day:', day);
        }}

        // Mark selected day
        markedDates={{
          '2025-08-06': { selected: true, marked: true, selectedColor: 'purple' },
        }}

        theme={{
          selectedDayBackgroundColor: '#8B5CF6',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#8B5CF6',
          arrowColor: '#8B5CF6',
          textMonthFontWeight: 'bold',
          textDayFontWeight: '500',
        }}
      />
    </View>
  );
}
export default MyCalendar
