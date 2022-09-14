import React, {useMemo} from 'react';
import FastImage, {FastImageProps, Source} from 'react-native-fast-image';
import {assets} from '../assets';

interface Props extends Omit<FastImageProps, 'source'> {
  uri?: string;
  width?: number;
  height?: number;
  placeholder?: Source;
  source?: Source;
}

const isString = (val: any) => {
  if (typeof val === 'string' || val instanceof String) return true;
  return false;
};

const AppImage: React.FC<Props> = ({
  uri,
  height,
  width,
  style,
  placeholder,
  source,
  ...props
}) => {
  const imageSource = useMemo<Source>(() => {
    const validURL =
      isString(uri) && uri?.match(/(http(s?)?:\/\/.*\.(?:png|jpg)*)/i);
    if (validURL) return {uri, priority: 'normal'};
    if (source) return source;
    if (placeholder) return placeholder;
    return assets.images.placeHolder;
  }, [placeholder, source, uri]);

  return (
    <FastImage source={imageSource} style={[{width, height}, style]} {...props}>
      {props.children}
    </FastImage>
  );
};

const MemoizedAppImage = React.memo(AppImage);
export {MemoizedAppImage as AppImage};
