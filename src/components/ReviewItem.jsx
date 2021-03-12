import React from 'react';
import { useSpring, animated } from 'react-spring';
import { View, StyleSheet, Text } from 'react-native';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 300,
    height: 200
    
  },
  part1: {
    flexGrow: 1,
    paddingTop: 5,
    paddingLeft: 15,
    color: "white",
    justifyContent: "space-around",
  },
  flexItem6: {
    flexGrow: 0,
    backgroundColor: 'white',
    width: 250,
    height: 100,
    top: 20,
    //fontWeight: 'bold',
    //lineHeight: 6,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  ratingTag: {
    backgroundColor: 'white',
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 2,
    width: 50,
    height: 50,
    padding: 8,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateTag: {
    flexGrow: 0,
    backgroundColor: 'white',
    width: 250,
    height: 100,
    top: 20,
    //fontWeight: 'bold',
    //lineHeight: 6,
    flexDirection: 'column',
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
  flexItem1: {
    flexGrow: 0,
    backgroundColor: 'white',
    //fontWeight: 'bold',
    width: 300,
    height: 150,
    top: 10,
    //lineHeight: 6,
    flexDirection: 'column',
  },


});

const ReviewItem = ({ itemData }) => {

  const opacityStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  console.log('itemData:', itemData);

  if (itemData === undefined) { return null; }
  return (
    <View style={styles.container}>
      <View style={styles.flexItem1}>
        <View style={styles.flexItem5}>

          <Text style={styles.ratingTag} testID="testRating" > {itemData.node.rating}</Text>

          <View style={styles.flexItem6}>
            <animated.div style={opacityStyle} >
              <Text fontWeight="bold" testID="testName" > {itemData.node.user.username}</Text>
            </animated.div >
            
            <Text fontWeight="bold" testID="testDate" > {format(new Date(itemData.node.createdAt),'dd.MM.yyyy')}</Text>
            <Text testID="testText" > {itemData.node.text}</Text>
          </View>

        </View>

      </View>
    </View>
  );
};

export default ReviewItem;