import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../App';

const PaymentDetailsScreen = () => {
  const { formData, setFormData } = useContext(AppContext);
  const navigation = useNavigation();

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    alert('Payment Submitted');
    // Navigate to Main Tab Navigator
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter card number"
        value={formData.cardNumber}
        onChangeText={(text) => handleChange('cardNumber', text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Expiration Date</Text>
      <TextInput
        style={styles.input}
        placeholder="MM/YY"
        value={formData.expirationDate}
        onChangeText={(text) => handleChange('expirationDate', text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>CVV</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter CVV"
        value={formData.cvv}
        onChangeText={(text) => handleChange('cvv', text)}
        keyboardType="numeric"
      />

      <Button title="Submit Payment" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default PaymentDetailsScreen;
