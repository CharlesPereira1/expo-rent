import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 12,
    color: "#4f4a4a",
  },
  dotContent: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "red",
    marginHorizontal: 4,
  },
  badge: {
    color: "red",
    fontSize: 9,
    fontFamily: "Montserrat_700Bold",
  },
  description: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 9,
    color: "#4f4a4a",
  },
  footer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  price: {
    fontSize: 15,
    fontFamily: "Montserrat_700Bold",
  },
});
