import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import LandingScreen from './screens/Landing';
import SignInScreen from './screens/SignIn';
import HomeScreen from './screens/Home';

 
const RootStack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStack.Navigator initialRouteName="Home"> */}
      <RootStack.Navigator>
        <RootStack.Screen name="Landing" component={LandingScreen} />
        <RootStack.Screen name="Sign In" component={SignInScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;