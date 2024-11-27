import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

const Welcome = ({ userDetails }) => {
  console.log("userDetails", userDetails?.userName); // Debugging log
  return (
    <View>
      <View style={styles.container} testID="styles.container">
        <Text style={styles.userName}>Hello {userDetails?.userName}!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect meditation</Text>
      </View>
    </View>
  );
};

export default Welcome;

// Styling
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
});
