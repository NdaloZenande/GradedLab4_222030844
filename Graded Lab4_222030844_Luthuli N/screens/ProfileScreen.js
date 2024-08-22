import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AppContext } from '../App';

const ProfileScreen = ({ navigation }) => {
  const { formData, setFormData } = useContext(AppContext);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        keyboardType="email-address"
      />

      <Text>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={formData.phone}
        onChangeText={(text) => handleChange('phone', text)}
        keyboardType="phone-pad"
      />

      <Button
        title="Next: Address"
        onPress={() => navigation.navigate('AddressDetails')}
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
    marginVertical: 10
  },
});

export default ProfileScreen;
