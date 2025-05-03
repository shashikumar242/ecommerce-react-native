import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens'];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        ListHeaderComponent={
          <>
            <Text style={styles.matchText}>Match Your Style</Text>

            {/* input container */}
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name={'search'} size={26} color={'#C0C0C0'} />
              </View>
              <TextInput style={styles.textInput} placeholder="Search" />
            </View>
            <FlatList
              data={categories}
              renderItem={({item}) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        renderItem={({item, index}) => (
          <ProductCard
            item={item}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            keyExtractor={index}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  matchText: {
    fontSize: 26,
    color: '#0000001',
    marginTop: 22,
  },

  inputContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },

  iconContainer: {
    marginHorizontal: 22,
  },

  textInput: {
    flex: 1,
    borderColor: 'black',
  },
});
