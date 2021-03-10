import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from '../components/RepositoryItem';
import useRepository from '../hooks/useRepository';
import { useParams } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  const { id } = useParams();
  const { repositories } = useRepository(id);

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

  return (
    <FlatList
      data={repoNodes}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    // Other props
    />
  );
};

export default Repository;
