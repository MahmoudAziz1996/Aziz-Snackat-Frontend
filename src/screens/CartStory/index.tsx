import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {AppIcon, Label} from '../../components';
import {colors} from '../../assets/theme';

const CartHeader = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <AppIcon type="AntDesign" name="shoppingcart" size={30} />
      <View style={styles.counter}>
        <Label style={styles.title}>0</Label>
      </View>
    </TouchableOpacity>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  counter: {
    position: 'absolute',
    minWidth: 25,
    minHeight: 20,
    left: -15,
    top: -6,
    borderRadius: wp(50),
    backgroundColor: colors.transparentBlack2,
    padding: 4,
    justifyContent: 'center',
  },
  title: {
    fontSize: wp(3),
    textAlign: 'center',
    color: colors.white,
    fontWeight: '800',
  },
});
