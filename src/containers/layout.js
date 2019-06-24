import React from 'react';
import { View, StyleSheet } from "react-native";
import { TopBar } from '../components/generic';
import { withTheme } from 'react-native-paper';

const Layout = (props) => {
  const { colors } = props.theme;

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: colors.background, alignItems: 'center' }}>
      {props.title ? <TopBar title={props.title} /> : null}
      
      <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        {props.children}
      </View>

    </View>
  );
};

export default withTheme(Layout);