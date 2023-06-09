import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function UserDetailScreen({ route }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${route.params.id}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const updateUser = async () => {
    try {
      const updatedUser = {
        // Atualize os campos que deseja alterar
        name: 'Novo nome',
        email: 'novoemail@example.com',
        age: 25,
      };

      await axios.put(`http://localhost:8080/users/${route.params.id}`, updatedUser);
      console.log('User updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const updatePassword = async () => {
    try {
      const updatedPassword = {
        password: 'novasenha123',
      };

      await axios.put(`http://localhost:8080/users/updt/${route.params.id}`, updatedPassword);
      console.log('Password updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Details</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Age: {user.age}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Update User" onPress={updateUser} />
        <Button title="Update Password" onPress={updatePassword} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});