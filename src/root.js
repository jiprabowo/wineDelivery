import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CartScreen,
  HomeScreen,
  PictureScreen,
  ProductDetails,
  ProfileScreen,
  SearchScreen,
} from './screen';
import {NavigationContainer} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ad893d',
        tabStyle: {
          backgroundColor: '#222324',
        },
        inactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: function icon(props) {
            return <Icon size={28} color={props.color} name="home" />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: function icon(props) {
            return <Icon size={28} color={props.color} name="shopping-cart" />;
          },
        }}
      />
      <Tab.Screen
        name="Picture"
        component={PictureScreen}
        options={{
          tabBarIcon: function icon(props) {
            return <Icon size={28} color={props.color} name="camera" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: function icon(props) {
            return <Icon size={28} color={props.color} name="person" />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: function icon(props) {
            return <Icon size={28} color={props.color} name="search" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Home = createStackNavigator();
function HomeStack() {
  return (
    <Home.Navigator screenOptions={{headerShown: false}}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="ProductDetails" component={ProductDetails} />
    </Home.Navigator>
  );
}

const Stack = createStackNavigator();
const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{
            // title: 'WINE DELIVERY',
            headerTitle: function headerRight(props) {
              return <Logo {...props} />;
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: '#222324',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Logo = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{width: 40, marginRight: 5, height: 40}}
        source={require('./assets/images/logo.png')}
      />
      <Text style={{color: 'white', fontSize: 16}}>WINE.DELIVERY</Text>
    </View>
  );
};

export default Root;
