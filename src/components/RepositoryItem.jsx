import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import Text from './text';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 300,
    height: 250
  },
  avatar: {
    width: 40,
    height: 48,
    padding: 20,
    borderRadius: 10,
    top: 2,
    justifyContent: 'space-around',
  },
  flexItem1: {
    flexGrow: 0,
    backgroundColor: 'white',
    fontWeight: 700,
    width: 300,
    height: 150,
    top: 10,
    lineHeight: 6,
    flexDirection: 'column',
  },
  flexItem2: {
    flexGrow: 0,
    backgroundColor: 'white',
  },
  flexItem3: {
    flexGrow: 0,
    backgroundColor: 'white',
  },
  flexItem4: {
    flexGrow: 0,
    backgroundColor: 'white',
    flexDirection: 'column',
    width: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexItem5: {
    flexGrow: 0,
    backgroundColor: 'white',
    flexDirection: 'column',
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  flexItem6: {
    flexGrow: 0,
    backgroundColor: 'white',
    width: 250,
    height: 100,
    top: 20,
    //fontWeight: 700,
    lineHeight: 6,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
 
  languageTag: {
    backgroundColor: '#0366d6',
    color: 'white',
    width: 115,
    height: 40,
    padding: 8,
    borderRadius: 10,
  },
});

const RepositoryItem = ({ itemData }) => (
  <View style={styles.flexContainer}>
    <View style={styles.flexItem1}>
      <View style={styles.flexItem5}>
        <Image
          style={styles.avatar}
          source={{
            uri: itemData.ownerAvatarUrl,
          }}
        />
        <View  style={styles.flexItem6}>
          <Text > {itemData.fullName}</Text>
          <Text>  {itemData.description}</Text>
          <Text style={styles.languageTag}> {itemData.language}</Text>
        </View>
      </View>

    </View>
    <View style={styles.flexItem4}>
      <Text>{(itemData.forksCount / 1000).toFixed(1)}k Forks</Text>
    </View>
    <View style={styles.flexItem4}>
      <Text>{(itemData.stargazersCount / 1000).toFixed(1)}k Stars</Text>
    </View>
    <View style={styles.flexItem4}>
      <Text color="textSecondary">{itemData.ratingAverage} Rating</Text>
    </View>
    <View style={styles.flexItem4}>
      <Text>{itemData.reviewCount} Reviews</Text>
    </View>
  </View>
);

export default RepositoryItem;