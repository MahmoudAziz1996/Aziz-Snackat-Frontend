import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../assets/theme';

interface Props {
  type: 'add' | 'remove';
  onPress: () => void;
}
const CounterButton = ({type, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        name={type === 'add' ? 'add' : 'remove'}
        size={16}
        color={colors.black}
      />
    </TouchableOpacity>
  );
};

export {CounterButton};

const styles = StyleSheet.create({
  container: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(50),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
