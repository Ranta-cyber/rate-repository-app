import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ReviewItem from './ReviewItem';
import { useParams } from "react-router-native";
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 15,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = () => {
  const { id } = useParams();
  const { authorizedUser } = useAuthorizedUser(true);

  console.log('review id', id);
  console.log('authorizedUser', authorizedUser);

  if (!authorizedUser) { return (<></>); }

  let repoNodes = [];
  repoNodes[0] = authorizedUser;

  console.log('repoNodes', repoNodes);

  const renderReview = ({ item }) => (
    <View style={styles.flexItemA}>
      <ReviewItem itemData={item}/>
    </View>
  );

  /* const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the list');
  }; */

  return (
    <FlatList
      data={authorizedUser.reviews.edges}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderReview}
      /* onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      ListHeaderComponent={() => <RepositoryItem itemData = {repositories} showOnlyOne={true}/>}
    // Other props */
    />
  );
};

export default ReviewList;