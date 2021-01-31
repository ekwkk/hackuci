import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  timer: {
    marginTop: 110,
  },
  timerText: {
    bottom: 150,
    fontSize: 60,
    fontFamily: "RobotoCondensed_400Regular",
    color: "#D6C212",
    textAlign: "center",
  },
  timerText2: {
    left: 35,
    bottom: 150,
    fontSize: 14,
    width: 120,
    textAlign: "center",
    fontFamily: "RobotoCondensed_400Regular",
  },
  quarantineTime: {
    top: 70,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "RobotoCondensed_400Regular",
  },
  buttonText: {
    color: "white",
    left: 120,
    top: 10,
    fontSize: 25,
  },
  button: {
    backgroundColor: "#1B998B",
    width: 309,
    height: 48,
    marginTop: 20,
    borderRadius: 50,
  },
  input: {
    height: 48,
    width: 309,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  coin: {
    left: 110,
    top: 40,
    backgroundColor: "#2E294E",
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cointext: {
    color: "white",
  },
});
