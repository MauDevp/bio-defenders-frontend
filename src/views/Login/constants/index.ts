import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    marginBottom: 0,
  },
  title2: {
    marginTop: 0,
    marginBottom: 10,
  },
  input: {
    width: 310,
    height: 58,
    margin: 12,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#E5E5E5",
    backgroundColor: "#F7F7F7",
    paddingLeft: 20,
  },
  primaryButton: {
    backgroundColor: "#58CC02",
    padding: 10,
    borderRadius: 16,
    width: 310,
    height: 58,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
    borderColor: "#58A700",
    borderWidth: 0,
    borderEndWidth: 0.1,
    borderStartWidth: 0.1,
    borderBottomWidth: 4,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 24,
    marginLeft: 12,
  },
  googleButton: {
    marginTop: 10,
    backgroundColor: "#F7F7F7",
    padding: 10,
    borderRadius: 16,
    width: 310,
    height: 58,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#E5E5E5",
    borderBottomWidth: 3,
  },
});
