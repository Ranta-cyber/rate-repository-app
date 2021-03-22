import React, { useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import OrderRepositories from './../OrderRepositories';
import useRepositories from '../../hooks/useRepositories';
import MySearchBar from '../MySearchBar';
import { useHistory } from "react-router-native";
import { useDebounce } from 'use-debounce';

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

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const props = this.props;
    //console.log('props:', props);

    return (
      <>
        <OrderRepositories sort={props.sort} setSort={props.setSort} />
        <MySearchBar setSearch={props.setSearch} search={props.search}
        />
      </>
    );
  };
  render() {
    const props = this.props;

    if (props.repositories)
      console.log('repositories.data:', props.repositories.data);

    // Get the nodes from the edges array
    const repositoryNodes = props.repositories
      ? props.repositories.edges.map(edge => edge.node)
      : [];

    const renderItem = ({ item }) => (
      <View style={styles.flexItemA}>
        <TouchableOpacity onPress={() => props.history.push(`/repository/${item.id}`)}>
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
        ListHeaderComponent={this.renderHeader(props.sort, props.setSort)}

      // Other props
      />
    );
  }
}

const RepositoryList = () => {

  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [searchQueryDebounced] = useDebounce(search, 500);
  const history = useHistory();

  let ord = 'CREATED_AT', dir = 'ASC';

  console.log('sort:', sort);
  console.log('search:', search);

  switch (sort) {
    case 'highest':
      ord = 'RATING_AVERAGE', dir = 'DESC'; break;
    case 'lowest':
      ord = 'RATING_AVERAGE', dir = 'ASC'; break;
    case 'last':
      ord = 'CREATED_AT', dir = 'ASC'; break;
    default:
      ord = 'CREATED_AT', dir = 'ASC';
  }

  const { repositories } = useRepositories(ord, dir, searchQueryDebounced);

  return <RepositoryListContainer
    repositories={repositories}
    sort={sort}
    setSort={setSort}
    history={history}
    search={searchQueryDebounced}
    setSearch={setSearch} />;
};

export default RepositoryList;