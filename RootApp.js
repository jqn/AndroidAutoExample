import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  Screen,
  ScreenManager,
  useCarNavigation,
} from 'react-native-android-auto';

const DeliveryListScreen = () => {
  return (
    <pane-template title={'Shopify Local Delivery'}>
      <item-list header="Delivery Lists">
        <row key={1} title={"Today's Delivery"} texts={['Delivery 1']} />
        <action title="Add Delivery" texts={['hello world']} />
      </item-list>
    </pane-template>
  );
};

const Main = () => {
  return (
    <list-template title={'Shopify Local Delivery test'} isLoading={false}>
      <item-list header="Delivery Lists">
        <row key={1} title={"Today's Delivery"} texts={['Delivery 1']} />
      </item-list>
    </list-template>
  );
};

const RootApp = () => {
  return (
    <ScreenManager>
      <Screen name="root" render={Main} />
      <Screen name="deliveryList" render={DeliveryListScreen} />
    </ScreenManager>
  );
};

export default RootApp;

// const styles = StyleSheet.create({});
