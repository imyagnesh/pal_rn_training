import React from 'react';
import Login from './src/Pages/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/Pages/Register';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          options={() => {
            return {
              headerShown: false,
            };
          }}
          name="Login"
          component={Login}
        />
        <MainStack.Screen
          options={() => {
            return {
              headerTransparent: true,
              headerShadowVisible: false,
            };
          }}
          name="Register"
          component={Register}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
