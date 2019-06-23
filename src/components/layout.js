import React from 'react';
import { View, StyleSheet } from "react-native";
import { TopBar } from './generic';

const styles = StyleSheet.create({
  layout: {
      flex: 1, 
      width: '100%',
      backgroundColor: '#f3eff5',
      alignItems: 'center',    // Horizontal alignment
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',    // Horizontal alignment
    justifyContent: 'center', // Vertical alignment
  }
});

const Layout = ({ title, children }) => {
  return (
    <View style={styles.layout}>
      <TopBar title={title} />
      <View style={styles.container}>{children}</View>
    </View>
  );
};

export default Layout;