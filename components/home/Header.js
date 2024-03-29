import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { open } from '../../redux/reducer/sidebarSlice';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const handleUser = async () => {
    navigation.navigate('MemberScreen');
  };

  return (
    <View
      style={
        route.name === 'HomeScreen' ? styles.container : styles.otherContainer
      }
    >

      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      {route.name === 'HomeScreen' ? (
        <TouchableOpacity activeOpacity={0.6} onPress={() => dispatch(open())}>
          <Icon name='menu' color='#000' size={30} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#33CCFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  otherContainer: {
    flexDirection: 'row',
    backgroundColor: '#99ffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  user: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});
