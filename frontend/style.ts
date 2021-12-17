import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  baseText: {
    fontSize: 15,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "5%",
  },
  screen: {
    flex: 1,
    paddingHorizontal: "5%",
    paddingTop: "15%",
  },
  mainModalRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 30,
  },
  mainModalButton: {
    paddingHorizontal: 30,
    alignItems: "center",
    paddingBottom: 30,
  },
});
