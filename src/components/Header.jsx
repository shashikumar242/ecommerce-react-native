import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({isCart}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HOME_STACK')}
        style={styles.appIconContainer}>
        {isCart ? (
          <Ionicons name={'chevron-back'} color={'#E96E63'} size={22} />
        ) : (
          <Icon name="view-grid" size={30} color={'#ff5f6d'} />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart}>My Cart</Text>}
      <Image source={require('../assets/dp.jpg')} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  appIconContainer: {
    backgroundColor: '#FFFFFF',
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },

  myCart: {
    fontSize: 28,
    color: 'black',
  },
});
