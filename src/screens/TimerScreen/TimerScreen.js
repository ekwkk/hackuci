import React, { useEffect, useState } from "react";
import {
  AsyncStorage,
  FlatList,
  Keyboard,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { firebase } from "../../firebase/config";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import {
  useFonts,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/roboto-condensed";

export default function TimerScreen(props) {
  const [entityText, setEntityText] = useState("");
  const [entities, setEntities] = useState([]);
  const [key, setKey] = useState(0);
  const [duration, setDuration] = useState(0);
  const [total, setTotal] = useState(50);
  const [money, setMoney] = useState("");
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  useEffect(() => {
    retrieveData();
  }, [money]);

  const setOnComplete = async () => {
    setTotal(1 + total);
    setMoney((parseInt(money) + 20).toString());
    storeData((parseInt(money) + 20).toString());
  };

  const storeData = async () => {
    try {
      console.log("storing this value: ", money);
      await AsyncStorage.setItem("@money", money);
      console.log("saved");
    } catch (error) {
      // Error saving data
      console.log("not saved");
    }
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@money");
      if (value !== null) {
        // We have data!!
        console.log("got data: ", value);
        setMoney(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log("no data");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.coin}>
        <Text style={styles.cointext}>{money.toString()} 💵</Text>
      </View>
      <Text style={styles.quarantineTime}>
        🔥 Quarantine Streak: {total.toString()} Days 🔥
      </Text>
      <View style={styles.timer}>
        <CountdownCircleTimer
          isPlaying
          duration={duration}
          key={key}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
          onComplete={() => setOnComplete()}
        />
        <Text style={styles.timerText}>{(duration / 3600) * 100}</Text>
        <Text style={styles.timerText2}>
          Coins will be earned after this cycle
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Hours'
        placeholderTextColor='#aaaaaa'
        onChangeText={(num) => setDuration(num * 3600)}
        value={duration}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setKey((prevKey) => prevKey + 1)}
      >
        <Text style={styles.buttonText}>Begin</Text>
      </TouchableOpacity>
    </View>
  );
}
