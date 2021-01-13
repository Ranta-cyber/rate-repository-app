import React from 'react';
import { View, StyleSheet } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import Text from './text';

 const styles = StyleSheet.create({

  container: {
    textAlign: 'left',
    backgroundcolor: 'white'
  },
  languageTag: {
    backgroundColor: '#0366d6',
  },

});

const RepositoryItem = ({itemData}) => (
  
    <View>
      <Text fontWeight="bold" fontSize="subheading">FullName: {itemData.fullName}</Text>
      <Text>description: {itemData.description}</Text>
      <Text style={styles.languageTag}> {itemData.language}</Text>
      <Text>forksCount: {itemData.forksCount}</Text>
      <Text>stargazersCount: {itemData.stargazersCount}</Text>
      <Text color="textSecondary">ratingAverage: {itemData.ratingAverage}</Text>
      <Text>reviewCount: {itemData.reviewCount}</Text>
    </View>
  
);

export default RepositoryItem;