import React from 'react';
import {useColorScheme} from 'nativewind';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import {DEFAULT_ICON_BLACK_COLOR, DEFAULT_ICON_WHITE_COLOR} from '../constants';

interface ThemedIconProps {
  name: string;
  size: number;
  color?: string;
  defaultColor?: string;
}

const ThemedIcon: React.FC<ThemedIconProps> = ({
  name,
  size,
  color,
  defaultColor,
}) => {
  const {colorScheme} = useColorScheme();
  const iconColor = defaultColor
    ? defaultColor
    : colorScheme === 'dark'
    ? DEFAULT_ICON_WHITE_COLOR
    : DEFAULT_ICON_BLACK_COLOR;

  return (
    <View>
      <Icon name={name} size={size} color={color ? color : iconColor} />
    </View>
  );
};

export default ThemedIcon;
