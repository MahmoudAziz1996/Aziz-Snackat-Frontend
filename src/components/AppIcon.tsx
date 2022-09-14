import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {IconProps} from 'react-native-vector-icons/Icon';

const IconPackages = {
  SimpleLineIcons,
  Ionicons,
  Fontisto,
  Feather,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
};
export interface AppIconProps extends IconProps {
  type?: keyof typeof IconPackages;
}

const AppIcon: React.FC<AppIconProps> = ({
  type = 'MaterialCommunityIcons',
  ...props
}) => {
  const Icon = IconPackages[type];
  return <Icon {...props} />;
};

const MemoizedAppIcon = React.memo(AppIcon);

export {MemoizedAppIcon as AppIcon};
