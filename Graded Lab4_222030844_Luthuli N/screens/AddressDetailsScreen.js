import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AppContext } from '../App'; 

const AddressDetailsScreen = ({ navigation }) => {
  const { formData, setFormData } = useContext(AppContext);

  const handleChange = (key, value) => {
    setFormData({ ...formData, address: { ...formData.address, [key]: value } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address Details</Text>
      
      <Text>City</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your city"
        value={formData.address?.city}
        onChangeText={(text) => handleChange('city', text)}
      />

      <Text>State</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your state"
        value={formData.address?.state}
        onChangeText={(text) => handleChange('state', text)}
      />

      <Text>Zip Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your zip code"
        value={formData.address?.zipCode}
        onChangeText={(text) => handleChange('zipCode', text)}
        keyboardType="numeric"
      />

      <Button
        title="Next: Payment"
        onPress={() => navigation.navigate('PaymentDetails')}
      />
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
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
  },
});

export default AddressDetailsScreen;
