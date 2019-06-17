import React from 'react';
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  layout: {
      flex: 1, 
      backgroundColor: '#f3eff5',
      alignItems: 'center',    // Horizontal alignment
      justifyContent: 'center' // Vertical alignment
  },
  errors: {
    backgroundColor: 'red',
    color: 'white',
    width: '80%'
  }
});

const layout = ({ children }) => {
  return <View style={styles.layout}>{children}</View>;
};

export default layout;