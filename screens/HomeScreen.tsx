import React, {useContext} from 'react';
import {Button, View, ImageBackground, Text} from 'react-native';
import {useColorScheme} from 'nativewind';
import {MediaType, launchImageLibrary} from 'react-native-image-picker';

import ThemeSwitcher from '../components/ThemeSwitcher';
import ThemedIcon from '../components/ThemedIcon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {Context} from '../contexts/Context';
import {Dropdown} from '../components/Dropdown';
import Note from '../components/Note';

const COLOR_ITEMS = [
  {label: 'Darkorange', value: '#AA4400'},
  {label: 'Blueviolet', value: 'blueviolet'},
  {label: 'Lightgrey', value: '#D3D3D3'},
];

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {colorScheme, toggleColorScheme, setColorScheme} = useColorScheme();
  const {
    selectedIcon,
    iconColor,
    iconSize,
    backgroundColor,
    setBackgroundColor,
    backgroundImage,
    setBackgroundImage,
  } = useContext(Context);

  const handleToggleClick = () => {
    toggleColorScheme();
  };

  const handleButtonClick = () => {
    navigation.navigate('IconsPicker');
  };

  const handleColorChange = (color: string) => {
    setColorScheme('light');
    setBackgroundColor(color);
  };

  const handleResetBackground = () => {
    setBackgroundColor('');
    setBackgroundImage('');
  };

  const handleImageSelect = () => {
    const options = {mediaType: 'photo' as MediaType};
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setBackgroundImage(response.assets[0].uri || '');
      }
    });
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={backgroundImage ? {uri: backgroundImage} : undefined}
        style={{
          flex: 1,
          backgroundColor:
            backgroundColor || (colorScheme === 'dark' ? '#000' : '#fff'),
        }}>
        <View className="px-2 py-6 flex flex-col">
          <ThemeSwitcher
            colorScheme={colorScheme}
            toggleColorScheme={handleToggleClick}
            disabled={!!backgroundImage || !!backgroundColor}
            classNames="mb-2"
          />
          <View className="mb-2">
            <Note note="you may not use switcher unless background color is default" />
          </View>

          <View className="flex items-center mb-3">
            <ThemedIcon name={selectedIcon} size={iconSize} color={iconColor} />
          </View>

          <View className="mb-2">
            <Button
              title="Go to Icons picker screen"
              onPress={handleButtonClick}
            />
          </View>

          <View className="mb-2">
            <Button
              title="Select Background Image"
              onPress={handleImageSelect}
            />
          </View>

          <View className="mb-1">
            <Button title="Reset Background" onPress={handleResetBackground} />
          </View>

          <View className="mb-2">
            <Note note="use the reset button to restore default values" />
          </View>

          <View className="mb-1">
            <Dropdown
              items={COLOR_ITEMS}
              onChange={handleColorChange}
              selectedItem={backgroundColor}
            />
          </View>

          <Note note="upon using dropdown the toggle value will be reset" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
