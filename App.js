import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Project1 from './src/project1';
import Project2 from './src/project2';
import Project3 from './src/project3';
import Project4 from './src/project4';
import Project5 from './src/project5';
import Project6 from './src/project6';
import Project7 from './src/project7';
import Project8 from './src/project8';


export default function App() {
  return (
      <View style={styles.container}>
        <Project1/>
        <Project2/>
        <Project3/>
        <Project4/>
        <Project5/>
        <Project6/>
        <Project7/>
        <Project8/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
