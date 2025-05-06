import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    let asyncarts = await AsyncStorage.getItem('carts');
    asyncarts = carts ? JSON.parse(asyncarts) : [];
    setCarts(asyncarts);
  };

  const addToCart = async item => {
    const itemExist = carts.findIndex(cart => cart.id === item.id);
    if (itemExist === -1) {
      const newCartItems = [...carts, item];
      await AsyncStorage.setItem('carts', JSON.stringify(newCartItems));
      setCarts(newCartItems);
    }
  };

  const deleteFromCart = async item => {
    const updatedCart = carts.filter(cart => cart.id !== item.id);
    setCarts(updatedCart);
    await AsyncStorage.setItem('carts', JSON.stringify(updatedCart));
  };

  const grandTotal = () => {
    return carts.reduce((amount, item) => {
      return amount + item.price;
    }, 0);
  };

  const value = {
    carts,
    addToCart,
    deleteFromCart,
    grandTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
