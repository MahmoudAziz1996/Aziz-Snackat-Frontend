import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../assets/theme';
interface Props {
  color?: string;
  size?: 'small' | 'large';
}
const Loading: React.FC<Props> = ({color, size}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size || 'small'} color={color || colors.dark} />
    </View>
  );
};

export {Loading};

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
