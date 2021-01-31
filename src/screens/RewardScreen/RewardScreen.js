import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import {
  useFonts,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/roboto-condensed";
import styles from "./styles";

export default function RewardScreen(props) {
  const [money, setMoney] = useState(1000);
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@money", money);
    } catch (error) {
      // Error saving data
    }
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@money");
      if (value !== null) {
        // We have data!!
        setMoney(value);
        print("money ", value);
      }
    } catch (error) {
      // Error retrieving data
      console.log("no money");
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <View>
      <View style={styles.coin}>
        <Text style={styles.cointext}>{money.toString()} 💵</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            source={require("../../../assets/doordash.png")}
            style={styles.imgimg}
            height={50}
          />
          <View style={styles.texts}>
            <Text style={{ color: "gray" }}>DOORDASH</Text>
            <Text>FREE SHIPPING ON ALL ORDERS</Text>
            <Text style={{ color: "gray" }}>500 quarancoins</Text>
          </View>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.wrapper}>
          <Image
            source={require("../../../assets/doordash.png")}
            style={styles.imgimg}
            height={50}
          />
          <View style={styles.texts}>
            <Text style={{ color: "gray" }}>DOORDASH</Text>
            <Text>20% Off on Order Over $30</Text>
            <Text style={{ color: "gray" }}>200 quarancoins</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
