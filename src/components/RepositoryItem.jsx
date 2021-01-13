import React from 'react';
import { View } from 'react-native';
import Text from './text';
const RepositoryItem = ({itemData}) => (
  
    <View>
      <Text fontWeight="bold" fontSize="subheading">FullName: {itemData.fullName}</Text>
      <Text>description: {itemData.description}</Text>
      <Text>‹language: {itemData.language}</Text>
      <Text>forksCount: {itemData.forksCount}</Text>
      <Text>stargazersCount: {itemData.stargazersCount}</Text>
      <Text color="textSecondary">ratingAverage: {itemData.ratingAverage}</Text>
      <Text>reviewCount: {itemData.reviewCount}</Text>
    </View>
  
);

export default RepositoryItem;