import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';

const MySearchBar = (search) => {
  
  return (
    <View
      style={{
        flexDirection: 'column',
      justifyContent: 'flex-start'
      }}>
      <Searchbar style={{ maxHeight: 50, width: '55%' }}
        placeholder="Search with name or owner"
         onChangeText={ (query) => search.setSearch(query)}
        //value={search.search}
      />
    </View>
  );
};

export default MySearchBar;