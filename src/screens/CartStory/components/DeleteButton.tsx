import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {AppIcon} from '../../../components';

interface Props {
  onPress: () => void;
}
const DeleteButton = ({onPress}: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <AppIcon type="Ionicons" name="trash" color={colors.white} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  button: {
    width: wp(10),
    height: wp(10),
    padding: 0,
    backgroundColor: colors.red,
    borderRadius: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
