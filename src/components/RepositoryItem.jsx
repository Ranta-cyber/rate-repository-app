import React from 'react';
import { Text, View } from 'react-native';

const RepositoryItem = ({itemData}) => (
  
    <View>
      <Text>FullName: {itemData.fullName}</Text>
      <Text>description: {itemData.description}</Text>
      <Text>‹language: {itemData.language}</Text>
      <Text>forksCount: {itemData.forksCount}</Text>
      <Text>stargazersCount: {itemData.stargazersCount}</Text>
      <Text>ratingAverage: {itemData.ratingAverage}</Text>
      <Text>reviewCount: {itemData.reviewCount}</Text>
    </View>
  
);

export default RepositoryItem;