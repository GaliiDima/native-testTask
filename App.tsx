import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ContextProvider} from './contexts/Context';

import HomeScreen from './screens/HomeScreen';
import IconsScreen from './screens/IconsScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="IconsPicker" component={IconsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
