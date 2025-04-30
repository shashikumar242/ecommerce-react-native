import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import HomeScreen from './src/screen/HomeScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="REORDER" component={Home} />
        <Tab.Screen name="CART" component={Home} />
        <Tab.Screen name="ACCOUNT" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
