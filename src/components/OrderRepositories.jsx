import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const OrderRepositories = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Select an item..</Button>}>
          <Menu.Item onPress={() => {}} title="Latest repositories" />
          <Menu.Item onPress={() => {}} title="Highest rated repositories" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Lowest rated repositories" />
        </Menu>
      </View>
    </Provider>
  );
};

export default OrderRepositories;