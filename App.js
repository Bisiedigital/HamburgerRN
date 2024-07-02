import React, { useEffect } from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HamburgerMenu from './HamburgerMenu';
import AboutUs from './AboutUs';
import MyComponent from './MyComponent';
import Profile from './Profile';
import HomeScreen from './HomeScreen';
import ReCaptcha from './ReCaptcha';
import HelloWorldScreen from './HelloWorldScreen';
import Airtime from './src/components/sidebar/Airtime';
import LogIn from './LogIn';
import ReCaptchaThatWorks from './ReCaptchaThatWorks';
import SplashScreen from 'react-native-splash-screen';
import UserList from './src/components/practice/UserList';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // if (Platform.OS === 'android')
    StatusBar.setHidden(true);
    SplashScreen.hide();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bisiedigital"
          component={HomeScreen}
          options={{
            //Add your component to the headerRight option
            headerRight: () => (
              <View style={{flexDirection: 'row', marginRight: 10}}>
                <MyComponent />
              </View>
            ),
            headerLeft: () => <HamburgerMenu />, // Add your component to the headerLeft option
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AboutOur" component={AboutUs} />
        <Stack.Screen name="Captcha Verification" component={ReCaptcha} />
        <Stack.Screen
          name="Captcha ThatWorks Verification"
          component={ReCaptchaThatWorks}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="HelloWorld" component={HelloWorldScreen} />
        <Stack.Screen name="Top up Airtime" component={Airtime} />
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="For Testing" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
