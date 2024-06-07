import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import ThemedIcon from '../components/ThemedIcon';
import WheelColorPicker from 'react-native-wheel-color-picker';
import {Slider} from '@miblanchard/react-native-slider';
import {Context} from '../contexts/Context';
import {DEFAULT_ICON_BLACK_COLOR} from '../constants';
import {useColorScheme} from 'nativewind';

// icons names from the library
// react-native-vector-icons/FontAwesome
const ICONS_LIST = [
  'rocket',
  'home',
  'user',
  'bell',
  'cog',
  'star',
  'heart',
  'camera',
  'gift',
  'search',
];

const IconsScreen = () => {
  const {
    selectedIcon,
    setSelectedIcon,
    setIconColor,
    iconColor,
    iconSize,
    backgroundImage,
    backgroundColor,
    setIconSize,
  } = useContext(Context);
  const {colorScheme} = useColorScheme();
  const [tempColor, setTempColor] = useState<string>(iconColor);

  useEffect(() => {
    if (iconColor) {
      setTempColor(iconColor);
    }
  }, [iconColor]);

  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
  };

  const handleColorChangeComplete = (color: string) => {
    setTempColor(color);
  };

  const handleColorSelect = () => {
    setIconColor(tempColor);
  };

  const handleColorReset = () => {
    setIconColor('');
    setTempColor(DEFAULT_ICON_BLACK_COLOR);
  };

  const handleSizeChange = (value: number | number[]) => {
    setIconSize(Array.isArray(value) ? value[0] : value);
  };

  return (
    <ImageBackground
      className="flex-1"
      source={backgroundImage ? {uri: backgroundImage} : undefined}
      style={{
        backgroundColor:
          backgroundColor || (colorScheme === 'dark' ? '#000' : '#fff'),
      }}>
      <ScrollView
        className=" dark:bg-neutral-900 px-2 pt-3"
        contentContainerStyle={{paddingBottom: 30}}>
        <Text className="text-xl text-black dark:text-white text-center mb-4">
          Choose your icon
        </Text>
        <View className="flex-row flex-wrap justify-center">
          {ICONS_LIST.map(icon => (
            <TouchableOpacity
              key={icon}
              onPress={() => handleIconSelect(icon)}
              className="m-3">
              <ThemedIcon name={icon} size={30} />
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex-1 p-2 mb-3">
          <Text className="text-center text-xl text-black dark:text-white">
            Choose a color
          </Text>
          <View className="flex-1 mb-3">
            <WheelColorPicker
              onColorChangeComplete={handleColorChangeComplete}
              color={tempColor}
            />
          </View>
          <View>
            <TouchableOpacity onPress={handleColorSelect}>
              <Text className="text-center text-xl text-blue-400">
                Select Color
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleColorReset}>
              <Text className="text-center text-xl text-red-400">
                Reset Color
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-4 px-2">
          <Text className="text-xl text-black dark:text-white text-center mb-2">
            Choose a size
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Slider
              value={iconSize}
              onValueChange={handleSizeChange}
              minimumValue={20}
              maximumValue={100}
              step={1}
              thumbTintColor="#000"
              minimumTrackTintColor="#1f1f1f"
              maximumTrackTintColor="#8a8a8a"
              containerStyle={{width: '80%'}}
            />
            <Text className="ml-2 text-xl text-black dark:text-white">
              {iconSize}
            </Text>
          </View>
        </View>

        <View className="flex flex-col justify-center items-center">
          <Text className="text-xl text-black dark:text-white text-center mb-4">
            Your current icon
          </Text>
          <ThemedIcon name={selectedIcon} size={iconSize} color={iconColor} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default IconsScreen;
