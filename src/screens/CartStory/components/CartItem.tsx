import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/theme/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import DeleteButton from './DeleteButton';
import {IProduct} from '../../../lib/@types/Products';
import {AppImage, Label} from '../../../components';
import {CounterButton} from './CounterButton';

interface Props {
  product: IProduct;
}
const CartItem = ({product}: Props) => {
  const handleIncrement = () => {};
  const handleDecrement = () => {};
  const handleDeletion = () => {};
  return (
    <View style={styles.container}>
      <AppImage
        uri={product.image}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.counterView}>
        <CounterButton type="remove" onPress={handleDecrement} />
        <Label style={styles.productCount}>{product.qty}</Label>
        <CounterButton type="add" onPress={handleIncrement} />
      </View>
      <DeleteButton onPress={handleDeletion} />
    </View>
  );
};

export default React.memo(CartItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: wp(2),
    margin: 4,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: wp(10),
  },
  counterView: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  productCount: {
    width: wp(12),
    textAlign: 'center',
    fontWeight: '500',
    fontSize: wp(3.8),
    color: colors.black,
  },
});
