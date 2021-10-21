import React, {useContext} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AuthProvider, {AuthContext} from './src/context/AuthContext';
import IconButton from './src/components/IconButton';

const MainStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
const MainDrawer = createDrawerNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'HomePage': {
              const Icon = require('./assets/icons/home.svg').default;
              return <Icon height={size} width={size} fill={color} />;
            }
            case 'SettingsPage': {
              const Icon = require('./assets/icons/settings.svg').default;
              return <Icon height={size} width={size} fill={color} />;
            }

            default:
              return null;
          }
        },
        headerShown: false,
      })}>
      <MainTab.Screen
        name="HomePage"
        options={{}}
        getComponent={() => require('./src/Pages/Home').default}
      />
      <MainTab.Screen
        name="SettingsPage"
        getComponent={() => require('./src/Pages/Settings').default}
      />
    </MainTab.Navigator>
  );
};

const MainDrawerNavigator = () => {
  const {clearToken} = useContext(AuthContext);
  return (
    <MainDrawer.Navigator>
      <MainDrawer.Screen
        name="HomeDrawer"
        options={{
          headerRight: () => {
            return (
              <IconButton
                icon={require('./assets/icons/logout.svg').default}
                onPress={() => {
                  clearToken();
                }}
              />
            );
          },
        }}
        component={MainTabNavigator}
      />
      <MainDrawer.Screen
        name="contact"
        getComponent={() => require('./src/Pages/Contact').default}
      />
    </MainDrawer.Navigator>
  );
};

const Main = () => {
  const appRef = useNavigationContainerRef();
  const {isAuthenticated, checkTokenExist} = useContext(AuthContext);

  const onReady = async () => {
    checkTokenExist();
  };

  return (
    <NavigationContainer ref={appRef} onReady={onReady}>
      <MainStack.Navigator>
        {!isAuthenticated && (
          <MainStack.Group>
            <MainStack.Screen
              options={() => {
                return {
                  headerShown: false,
                };
              }}
              name="Login"
              getComponent={() => require('./src/Pages/Login').default}
            />
            <MainStack.Screen
              options={() => {
                return {
                  headerTransparent: true,
                  headerShadowVisible: false,
                };
              }}
              name="Register"
              getComponent={() => require('./src/Pages/Register').default}
            />
          </MainStack.Group>
        )}
        {!!isAuthenticated && (
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={MainDrawerNavigator}
          />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
