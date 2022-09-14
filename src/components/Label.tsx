import React, {memo, ReactNode} from 'react';
import {Text, StyleProp, TextStyle, TextProps, StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {colors, fontSizes, fontWeight} from '../assets/theme';

export interface LabelProps extends TextProps {
  children?: ReactNode;
  size?: keyof typeof fontSizes;
  weight?: keyof typeof fontWeight;
  color?: string;
  style?: StyleProp<TextStyle>;
  textAlign?: 'center' | 'left' | 'right' | 'center';
}
const Label = memo((props: LabelProps) => {
  const {
    children,
    weight = 'Regular',
    size = 'Secondary',
    textAlign = 'left',
    color = colors.black,
    style,
    ...rest
  } = props;

  const weightStyles = {
    fontWeight: fontWeight[weight],
  };

  const sizeStyles = {
    fontSize: fontSizes[size],
    color,
    letterSpacing: widthPercentageToDP(0.05),
  };

  return (
    <Text
      {...rest}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={[weightStyles, sizeStyles, styles[textAlign], style]}>
      {children}
    </Text>
  );
});

const styles = StyleSheet.create({
  left: {textAlign: 'left'},
  right: {textAlign: 'right'},
  auto: {textAlign: 'auto'},
  center: {textAlign: 'center'},
});
const MomoizedLabel = React.memo(Label);
export {MomoizedLabel as Label};
