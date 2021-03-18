import  React, {useState}  from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useHistory } from "react-router-native";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

/* const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
]; */


const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();
  if (repositories)
    console.log('repositories.data:', repositories.data);

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <View style={styles.flexItemA}>
      <TouchableOpacity onPress={() => history.push(`/repository/${item.id}`)}>
        <RepositoryItem itemData={item} showOnlyOne={false} />
      </TouchableOpacity>
    </View>
  );
  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}

    // Other props
    />
  );
};

const RepositoryList = () => {

  const [ord, setOrd] = useState('CREATED_AT');
  const [dir, setDir] = useState('ASC');
  
  const { repositories } = useRepositories(ord, dir);

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;