import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../assets/theme';
import {AppIcon, Label} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp as NavigationProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../routes/types/params';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../redux/types';

const CartHeader = () => {
  const {navigate} = useNavigation<NavigationProps<MainStackParamList>>();
  const goToCart = () => navigate('Cart');
  const totalCount = useSelector((state: IRootState) => state.cart.totalCount);

  return (
    <TouchableOpacity onPress={goToCart}>
      <AppIcon type="AntDesign" name="shoppingcart" size={30} />
      <View style={styles.counter}>
        <Label style={styles.title}>{totalCount}</Label>
      </View>
    </TouchableOpacity>
  );
};

export {CartHeader};

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
