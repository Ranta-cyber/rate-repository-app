import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from '../components/RepositoryItem';
import useRepository from '../hooks/useRepository';
import ReviewItem from './ReviewItem';
import { useParams } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 15,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  const { id } = useParams();
  const { repositories, fetchMore } = useRepository(id);

  console.log('repo id', id);
  console.log('repositories', repositories);

  if (!repositories) { return (<></>); }

  let repoNodes = [];
  repoNodes[0] = repositories;

  console.log('repoNodes', repoNodes);

  const renderItem = ({ item }) => (
    <View style={styles.flexItemA}>
      <RepositoryItem itemData={item} showOnlyOne={true} />
    </View>
  );
  const renderReview = ({ item }) => (
    <View style={styles.flexItemA}>
      <ReviewItem itemData={item}/>
    </View>
  );

  const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the list');
  };

  return (
    <FlatList
      data={repositories.reviews.edges}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderReview}
      onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      ListHeaderComponent={() => <RepositoryItem itemData = {repositories} showOnlyOne={true}/>}
    // Other props
    />
  );
};

export default Repository;
