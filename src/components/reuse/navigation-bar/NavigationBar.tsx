import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type RootStackParam = {
  Home: undefined;
  Location: undefined;
  Category: undefined;
  MyPage: undefined;
};

const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  padding: 30px;
  width: 100%;
  bottom: 0;
`;

const Button = styled(Pressable)`
  padding: 5px;
`;

const NavigationText = styled(Text)`
  color: white;
`;

export default function NavigationBar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  return (
    <SafeAreaView>
      <Container>
        <Button onPress={() => navigation.navigate('Home')}>
          <NavigationText>Home</NavigationText>
        </Button>
        <Button onPress={() => navigation.navigate('Location')}>
          <NavigationText>Location</NavigationText>
        </Button>
        <NavigationText>+</NavigationText>
        <Button onPress={() => navigation.navigate('Category')}>
          <NavigationText>Category</NavigationText>
        </Button>
        <Button onPress={() => navigation.navigate('MyPage')}>
          <NavigationText>My Page</NavigationText>
        </Button>
      </Container>
    </SafeAreaView>
  );
}
