import {Switch, Text, View} from 'react-native';

export type Theme = 'dark' | 'light' | 'system';

interface ThemeSwitcherProps {
  colorScheme: Theme;
  toggleColorScheme: () => void;
  classNames?: string;
  disabled?: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  colorScheme,
  toggleColorScheme,
  classNames,
  disabled,
}) => {
  const themeSwitcherStyles = `${classNames} flex-row gap-2 self-center`;

  return (
    <View className={themeSwitcherStyles}>
      <Text className="text-xl text-black dark:text-white">Toggle Theme</Text>
      <Switch
        value={colorScheme === 'dark'}
        onChange={toggleColorScheme}
        disabled={disabled}
      />
    </View>
  );
};

export default ThemeSwitcher;
