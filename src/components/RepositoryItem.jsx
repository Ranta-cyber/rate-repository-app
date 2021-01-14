import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import Text from './text';

const styles = StyleSheet.create({

  /* container: {
    textAlign: 'left',
    backgroundcolor: 'white'
  },*/
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    //flexFlow: 'row wrap',
    flexWrap: 'wrap',
    //flex: 200,
    alignItems: 'flex-w',
    justifyContent: 'space-around',    
  },
  avatar: {
    width: 50,
    height: 58,
    padding: 20,
    borderRadius: 10,
    top: 20
    
  },
  flexItem1: {
    flexGrow: 0,
    backgroundColor: 'white',
    fontWeight: 'bold',
    width: 500,
    height: 95,
    top: 10,
    lineHeight: 6
    
    
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
    width: 50,
    height: 80,
    alignItems: 'center',
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
    
    <Image
        style={styles.avatar}
        source={{
          uri: itemData.ownerAvatarUrl,
        }}
      />
      
    <View style={styles.flexItem1}>
      <Text> <b>{itemData.fullName}</b></Text>
      <br></br>
   {/*  </View>
    <View style={styles.flexItem1}> */}
      <Text>description: {itemData.description}</Text>
      <br></br>
    {/* </View>
    </View>
    <View style={styles.flexItem1}> */}
      <Text style={styles.languageTag}> {itemData.language}</Text>
    </View>
    <View style={styles.flexItem4}>
      <Text><b>{(itemData.forksCount/1000).toFixed(1)}k</b> Forks</Text>
    </View>
    <View style={styles.flexItem4}>
      <Text><b>{(itemData.stargazersCount/1000).toFixed(1)}k</b> Stars</Text>
    </View>
    <View style={styles.flexItem4} >
      <Text color="textSecondary"><b>{itemData.ratingAverage}</b> Rating</Text>
    </View>
    <View style={styles.flexItem4}>
      <Text ><b>{itemData.reviewCount}</b> Reviews</Text>
    </View>
  </View>
);

export default RepositoryItem;