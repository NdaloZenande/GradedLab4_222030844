import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../App';

const CartScreen = () => {
  const { cart } = useContext(AppContext);

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item.name} - R{item.price.toFixed(2)}</Text>
              </View>
            )}
          />
          <Text style={styles.totalCost}>Total Cost: R{totalCost.toFixed(2)}</Text>
        </>
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    marginBottom: 8,
  },
  totalCost: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  emptyCart: {
    fontSize: 18,
    color: 'gray',
  },
});

export default CartScreen;
