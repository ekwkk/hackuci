import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 70,
    width: "100%",
    height: 250,
    backgroundColor: "#F46036",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  container1: {
    marginTop: 30,
    width: "100%",
    height: 250,
    backgroundColor: "#E71D36",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  wrapper: {
    top: 180,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
  },
  imgimg: {
    flex: 1,
  },
  texts: {
    flex: 2,
  },
  coin: {
    left: 248,
    top: 40,
    backgroundColor: "#2E294E",
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: 99,
  },
  cointext: {
    color: "white",
  },
});
