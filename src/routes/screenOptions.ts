import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import styles from './styles';
import {colors} from '../assets/theme';

export const commonScreenOptions: NativeStackNavigationOptions = {
  headerTitleStyle: styles.headerTitleStyle,
  headerBackTitleVisible: false,
  headerTintColor: colors.secondary,
  contentStyle: {backgroundColor: colors.white},
};
