import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {CartContext} from '../context/CartContext';

const CartCard = ({item}) => {
  const {deleteFromCart} = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.coverImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.circleSizeContainer}>
          <View style={[styles.circle, {backgroundColor: item.color}]} />
          <View style={styles.sizeCircle}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteFromCart(item)}>
        <FontAwesome6 name={'trash'} color={'#F68CB5'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },

  coverImage: {
    height: 125,
    width: '25%',
    borderRadius: 20,
  },

  cardContent: {
    flex: 1,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 18,
    color: '#444444',
    fontWeight: 500,
  },

  price: {
    color: '#797979',
    marginVertical: 10,
    fontWeight: 18,
  },

  circleSizeContainer: {
    flexDirection: 'row',
  },

  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },

  sizeCircle: {
    backgroundColor: 'white',
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  sizeText: {
    fontSize: 18,
    fontWeight: 500,
  },
});
