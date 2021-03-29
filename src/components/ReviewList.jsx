import React from 'react';
import { FlatList, StyleSheet, View, Button, Alert } from 'react-native';
import ReviewItem from './ReviewItem';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import { useHistory } from "react-router-native";
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  separator: {
    height: 15,
  },
  languageTag: {
    backgroundColor: '#0366d6',
    color: 'white',
    width: 150,
    height: 40,
    padding: 8,
    flexDirection: 'row',
    borderRadius: 10,
  },
  flexItem5: {
    flexGrow: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    //width: 300,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = () => {
  const history = useHistory();
  const [delReview] = useDeleteReview();
  const { authorizedUser, refetch } = useAuthorizedUser(true);

  console.log('authorizedUser', authorizedUser);

  if (!authorizedUser) { return (<></>); }

  let repoNodes = [];
  repoNodes[0] = authorizedUser;

  console.log('repoNodes', repoNodes);

  const RenderReview = ({ item }) => {

    const onDeleteReview = (item) => {
      console.log('alert:');
      Alert.alert(
        "Delete review",
        "Are you sure you want to delete this review?",
        [

          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Delete", onPress: () => delReview(item.node.id) }
        ]
      );
    };

    return (
      <View style={styles.flexItemA}>
        <ReviewItem itemData={item} />
        <View style={styles.flexItem5}>
          <Button style={styles.languageTag} title="View repository"
            onPress={() => history.push(`/repository/${item.node.repository.id}`)} />
          <Button style={styles.languageTag} color='red' title="Delete review" onPress={() => onDeleteReview(item)} testID='onDeleteReview' />
        </View>
      </View>
    );
  };

  /* const onEndReach = () => {
        fetchMore();
    console.log('You have reached the end of the list');
  }; */

  return (
    <FlatList
      data={authorizedUser.reviews.edges}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RenderReview item={item}/>}
    /* onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    ListHeaderComponent={() => <RepositoryItem itemData = {repositories} showOnlyOne={true}/>}
  // Other props */
    />
  );
};

export default ReviewList;