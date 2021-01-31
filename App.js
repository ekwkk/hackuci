import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  TimerScreen,
  RegistrationScreen,
  RewardScreen,
} from "./src/screens";
import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
import { firebase } from "./src/firebase/config";
import {
  useFonts,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/roboto-condensed";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  // SKIPPED STEPS FOR RELOAD
  // if (loading) {
  //   console.log('still loading')
  //   return (
  //     <></>
  //   )
  // }

  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection('users');
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log('found user');
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data()
  //           setLoading(false)
  //           setUser(userData)
  //         })
  //         .catch((error) => {
  //           setLoading(false)
  //         });
  //     } else {
  //       console.log('did not user');
  //       setLoading(false)
  //     }
  //   });
  // }, []);

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {user ? (
    //       <Stack.Screen name='Timer'>
    //         {(props) => <TimerScreen {...props} extraData={user} />}
    //       </Stack.Screen>
    //     ) : (
    //       <>
    //         {/* <Stack.Screen name="Login" component={LoginScreen} />
    //         <Stack.Screen name="Registration" component={RegistrationScreen} /> */}
    //         <Stack.Screen name='Timer' component={TimerScreen} />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Logout'>
        <Drawer.Screen name='Timer' component={TimerScreen} />
        <Drawer.Screen name='Reward' component={RewardScreen} />
        <Drawer.Screen name='Logout' component={LoginScreen} />
        <Drawer.Screen name='💎 ✋ 🏡' component={RegistrationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
