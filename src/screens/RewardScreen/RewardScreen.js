import React, { useEffect, useState } from "react";
import { TouchableHighlight, Button, Image, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from "@expo-google-fonts/roboto-condensed";
import styles from "./styles";
import Modal from "react-native-modal";

export default function RewardScreen(props) {
  const [money, setMoney] = useState(1001);
  const [isModalVisible, setModalVisible] = useState(false);
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  //   const storeData = async () => {
  //     try {
  //       await AsyncStorage.setItem("@money", money);
  //     } catch (error) {
  //       // Error saving data
  //     }
  //   };

  //   const retrieveData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("@money");
  //       if (value !== null) {
  //         // We have data!!
  //         setMoney(value);
  //         print("money ", value);
  //       }
  //     } catch (error) {
  //       // Error retrieving data
  //       console.log("no money");
  //     }
  //   };

  //   useEffect(() => {
  //     retrieveData();
  //   }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const redeemRewards = (amt) => {
    setMoney(money - amt);
    toggleModal();
  };

  return (
    <View>
      <View style={styles.coin}>
        <Text style={styles.cointext}>{money.toString()} 💵</Text>
      </View>
      <TouchableHighlight
        underlayColor={"COLOR"}
        onPress={() => redeemRewards(500)}
      >
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
          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View style={styles.modalview}>
              <Text style={styles.modaltext}>Congratulations! 🎉</Text>
              <Text style={styles.modaltext1}>
                You just redeemed a prize! It should be right in your email
                soon.
              </Text>
              <Button
                title='Got it!'
                animationIn='slideInUp'
                onPress={toggleModal}
              />
            </View>
          </Modal>
        </View>
      </TouchableHighlight>
      <View style={styles.container1}>
        <View style={styles.wrapper}>
          <Image
            source={require("../../../assets/tesla.png")}
            style={styles.imgimg}
            height={50}
          />
          <View style={styles.texts}>
            <Text style={{ color: "gray" }}>TESLA</Text>
            <Text>0.0001 Share of $TSLA 🚀 💎 💸 </Text>
            <Text style={{ color: "gray" }}>1000 quarancoins</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
