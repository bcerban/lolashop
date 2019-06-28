import React from 'react';
import { View, ScrollView } from "react-native";
import TopBar from '../components/top-bar';
import { withTheme } from 'react-native-paper';

const Layout = (props) => {
  const { colors } = props.theme;

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: colors.surface, alignItems: 'center' }}>
      {props.title && (
        <TopBar title={props.title} />
      )}
      
      {props.scrollable ? (
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ 
            alignItems: 'center', 
            justifyContent: props.justifyContent ? props.justifyContent : 'center' 
          }}
        >
          {props.children}
        </ScrollView>
      ) : (
        <View style={{ 
          flex: 1, 
          width: '100%', 
          alignItems: 'center', 
          justifyContent: props.justifyContent ? props.justifyContent : 'center' 
        }}>
          {props.children}
        </View>
      )}
    </View>
  );
};

export default withTheme(Layout);