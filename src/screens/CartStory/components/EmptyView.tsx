import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {assets} from '../../../assets';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../assets/theme';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../routes/types/params';

const EmptyView = () => {
  const {goBack} =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={assets.images.emptyCart}
        resizeMode={FastImage.resizeMode.contain}
      />
      <TouchableOpacity style={styles.footer} onPress={goBack}>
        <Icon name="arrow-long-left" color={colors.primary} size={24} />
        <Text style={styles.hyprdText}> Go to producst list to browse </Text>
      </TouchableOpacity>
    </View>
  );
};

export {EmptyView};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp(80),
    height: wp(80),
  },
  hyprdText: {
    color: colors.primary,
    fontSize: wp(4),
    fontWeight: '600',
    marginLeft: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
