import {Alert, StyleSheet, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../assets/theme';
import FastImage from 'react-native-fast-image';
import {IProduct} from '../../../lib/@types/Products';
import {AppImage, Button, Label} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp as NavigationProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../routes/types/params';
import {addToCart} from '../../../redux/cartSlice';
import {useDispatch} from 'react-redux';

interface Props {
  product: IProduct;
}
const ProductRow = ({product}: Props) => {
  const {navigate} = useNavigation<NavigationProps<MainStackParamList>>();

  const dispatch = useDispatch();
  const handleSuccess = () => {
    dispatch(addToCart(product));
    Alert.alert('Item Added to cart', '', [
      {
        text: 'Continue browsing',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'Go to the cart', onPress: () => navigate('Cart')},
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.category}>
        <Label color={colors.white} size="Small">
          {product.category}
        </Label>
      </View>
      <AppImage
        uri={product.image}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View>
        <Label numberOfLines={2} style={styles.title} size="Secondary">
          {product.title}
        </Label>
      </View>
      <View style={styles.priceSection}>
        <Label style={styles.title}>USD {product.price}</Label>
        <Label style={styles.title}>{`${product.rating.rate}/5`}</Label>
      </View>
      <View style={styles.footer}>
        <Button
          style={styles.button}
          type={'dark'}
          radius="small"
          onPress={handleSuccess}>
          <Label style={styles.buttonText}>Add to cart</Label>
        </Button>
      </View>
    </View>
  );
};

export default React.memo(ProductRow);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: wp(45),
    height: wp(82),
    borderWidth: 2,
    borderRadius: 6,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: wp(40),
  },
  category: {
    alignSelf: 'flex-end',
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: wp(50),
    backgroundColor: colors.darkMedGrey,
    marginBottom: 6,
  },
  title: {
    fontWeight: '500',
    marginVertical: 4,
    lineHeight: wp(4.5),
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: colors.black,
    width: '70%',
    height: 30,
    paddingVertical: 7,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: wp(3.5),
    textAlign: 'center',
  },
});
