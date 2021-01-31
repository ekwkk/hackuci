import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "RobotoCondensed_700Bold",
    fontSize: 30,
  },
  subtitle: {
    marginTop: 10,
    fontFamily: "RobotoCondensed_400Regular",
  },
  intro: {
    flex: 1,
    height: 80,
    alignSelf: "center",
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 80,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: "#2E294E",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: "#1B998B",
    fontWeight: "bold",
    fontSize: 16,
  },
});
