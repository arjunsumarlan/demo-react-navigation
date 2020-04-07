import React, { useEffect } from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const routes = [
  {
    name: 'HomeStack',
    component: HomeStack
  },
  {
    name: 'Detail',
    component: DetailScreen
  }
]

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {routes.map((route) => <Tab.Screen {...route} />)}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Timeline" component={TimelineScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Timeline', {
        detailId: 2,
        list: [
          'hello',
          'world'
        ]
      })} title='Go To Detail' />
      <Text>Home Screen</Text>
    </View>
  );
}

function TimelineScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Timeline Screen</Text>
    </View>
  );
}

function DetailScreen({ route, navigation }) {
  const { detailId, list } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Go Back to Home' />
      <Text>Detail Screen : {detailId}</Text>
      {list.map((el) => <Text>{el}</Text>)}
    </View>
  )
}


export default App;