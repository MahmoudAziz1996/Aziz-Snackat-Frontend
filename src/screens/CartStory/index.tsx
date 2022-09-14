import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {EmptyView} from './components';
import {IProduct} from '../../lib/@types/Products';
import CartItem from './components/CartItem';

const Cart = () => {
  const cartItems: IProduct[] = [];
  const renderCartItems = () =>
    cartItems?.map(item => {
      return <CartItem product={item} key={item.id} />;
    });
  return (
    <View style={styles.container}>
      {cartItems?.length === 0 && <EmptyView />}
      <ScrollView>{renderCartItems()}</ScrollView>
      <View style={styles.footer}>
        <Text style={styles.text}>Total Count: x{`(${23})`} </Text>
        <Text style={styles.text}>Total Amount: {43555} USD</Text>
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footer: {
    height: wp(15),
    padding: 8,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowOffset: {width: 0, height: 0},
    shadowColor: colors.black,
    shadowRadius: 20,
    shadowOpacity: 0.1,
    elevation: 1,
    borderTopWidth: Platform.OS == 'ios' ? 0 : 1.5,
    borderColor: colors.lightGrey,
  },
  text: {
    fontSize: wp(4),
    fontWeight: '600',
    color: colors.black,
  },
});
