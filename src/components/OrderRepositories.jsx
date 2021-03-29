import  React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider } from 'react-native-paper';


const OrderRepositories = (sort) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  console.log('sort:', sort);

  return (

    <View
      style={{
        paddingTop: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Select an option..</Button>}>
        <Menu.Item onPress={() => { sort.setSort('last'); }} title="Latest repositories" />
        <Divider />
        <Menu.Item onPress={() => { sort.setSort('highest'); }} title="Highest rated repositories" />
        <Divider />
        <Menu.Item onPress={() => { sort.setSort('lowest'); }} title="Lowest rated repositories" />
      </Menu>
    </View>

  );
};

export default OrderRepositories;