import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { AppContext } from '../App';

const MenuScreen = () => {
  const { cart, setCart } = useContext(AppContext);

  const foodItems = [
    { id: '1', name: 'Pizza', price: 135.99 },
    { id: '2', name: 'Burger', price: 50.56 },
    { id: '3', name: 'Sushi', price: 109.92 },
    { id: '4', name: 'Fish & Chips', price: 75.32 },
    { id: '5', name: 'Grilled Chicken & Chips', price: 65.89 },
    { id: '6', name: 'Chocolate Cake', price: 35 },
    { id: '7', name: 'Milkshake', price: 25 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <View>
      <Text>Menu</Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - R{item.price.toFixed(2)}</Text>
            <Button title="Add To Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default MenuScreen;
