import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
  },
  qContainer: {
    padding: 20,
    height: "100%",
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 50,
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 50,
  },
  questionC: {
    marginVertical: 16,
    flex: 1,
  },
  question: {
    justifyContent: "center",
    padding: 20,
  },
  bt: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionsContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Styles;
