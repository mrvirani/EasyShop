import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Metrics from '../assets/Metrics/Metrics';
// import { Color, Metrics } from '../../Assets';
// import Metrics from '../../assests/Metrics';
// import Color from '../../constants/Color';
// const Tab = createMaterialTopTabNavigator();
const CheckOutTopTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.tabButtonActive]}
          >
            <Text style={[styles.tabButtonText, isFocused && styles.tabButtonTextActive]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  tabContainer: {
    // flex:1,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    marginHorizontal: Metrics.CountScale(20),
    borderRadius: Metrics.CountScale(40),
    marginVertical: Metrics.CountScale(10),
    paddingVertical: Metrics.CountScale(3),
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Metrics.CountScale(15),
    marginHorizontal: Metrics.CountScale(10),
  },
  tabButtonActive: {
    backgroundColor: '#ffff',
    marginVertical: Metrics.CountScale(5),
    paddingHorizontal: Metrics.CountScale(15),
    borderRadius: Metrics.CountScale(20),
    elevation: 10
  },
  tabButtonText: {
    color: 'black',
  },
  tabButtonTextActive: {
    color:'#fb5193',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.CountScale(20)
  },
});
export default CheckOutTopTabBar;







