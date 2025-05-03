import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductCard = ({item, isLiked, setIsLiked}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/sweatergirl.jpg')}
        style={styles.coverImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Jacket Jeans</Text>
        <Text style={styles.price}>$45.9</Text>
      </View>

      <TouchableOpacity
        onPress={() => setIsLiked(!isLiked)}
        style={styles.likeContainer}>
        {isLiked ? (
          <AntDesign name={'heart'} size={20} color={'#E55B5B'} />
        ) : (
          <AntDesign name={'hearto'} size={20} color={'#E55B5B'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    position: 'relative',
  },

  coverImage: {
    height: 256,
    width: '90%',
    borderRadius: 20,
    marginVertical: 10,
  },

  title: {
    fontSize: 18,
    color: '#444444',
    fontWeight: '600',
  },

  price: {
    fontSize: 18,
    color: '#9C9C9C',
    fontWeight: '600',
  },

  content: {
    paddingLeft: 15,
  },

  likeContainer: {
    height: 34,
    width: 34,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
