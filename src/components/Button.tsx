import React, {ReactNode} from 'react';
import {
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
  PressableProps,
  TextStyle,
  ActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../assets/theme';
import {Label, LabelProps} from './Label';

type ButtonTypes =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'outlined'
  | 'light'
  | 'link'
  | 'disabled';
type ButtonBorderTypes =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'light'
  | 'red'
  | 'disabled';
type ButtonRadiusTypes = 'small' | 'medium' | 'full' | 'none';

interface Props extends Omit<PressableProps, 'onPress'> {
  title?: string;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
  type?: ButtonTypes | null;
  radius?: ButtonRadiusTypes;
  height?: number;
  disabled?: boolean;
  border?: ButtonBorderTypes;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  labelProps?: Omit<LabelProps, 'children'>;
  onPress?: (params: any) => void;
  loading?: boolean;
  loadingStyle?: ActivityIndicatorProps;
}

const Button = (props: Props) => {
  const buttonColor: {[ButtonType in ButtonTypes]: string} = {
    dark: colors.dark,
    primary: colors.primary,
    outlined: 'transparent',
    light: colors.lightPrimary,
    secondary: colors.secondary,
    link: 'transparent',
    disabled: colors.lightGray,
  };

  const buttonRadius: {[ButtonRadiusType in ButtonRadiusTypes]: number} = {
    small: 5,
    medium: 10,
    full: 100,
    none: 0,
  };

  const borderColor: {[ButtonBorderType in ButtonBorderTypes]: string} = {
    dark: colors.dark,
    secondary: colors.secondary,
    red: colors.red,
    primary: colors.primary,
    light: colors.light,
    disabled: colors.lightGray,
  };
  const textColor = {
    dark: colors.dark,
    primary: colors.primary,
    light: colors.light,
    secondary: colors.secondary,
    link: colors.red,
    disabled: colors.darkGray,
    outlined: colors.secondary,
  };
  const height = props.height || widthPercentageToDP(13);
  const disabled = props.disabled || props.loading;
  return (
    <Pressable
      disabled={disabled}
      onPress={props.onPress}
      style={({pressed}) => [
        {
          backgroundColor:
            buttonColor[disabled ? 'disabled' : props.type || 'outlined'],
          borderRadius: buttonRadius[props.radius || 'none'],
          borderWidth: props.border ? 2 : 0,
          opacity: pressed ? props.activeOpacity || 0.7 : 1,
          height,
        },
        props.border && {
          borderColor: borderColor[disabled ? 'disabled' : props.border],
        },
        styles.button,
        props.style,
      ]}>
      {props.loading && (
        <ActivityIndicator
          color={colors.secondary}
          style={styles.loading}
          {...props.loadingStyle}
        />
      )}

      {props.iconLeft}
      {(props.children || props.title) && (
        <Label
          size={'Primary'}
          style={props.titleStyle}
          weight={'Medium'}
          {...props.labelProps}
          color={
            disabled
              ? textColor['disabled']
              : props.labelProps?.color || textColor['dark']
          }>
          {props.title}
          {props.children}
        </Label>
      )}
      {props.iconRight}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    // paddingHorizontal: widthPercentageToDP(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {marginHorizontal: 5},
});

const MemoizedButton = React.memo(Button);

export {MemoizedButton as Button};
