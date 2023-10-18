import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
//Import welcome screen
import Welcome from './src/screen/Welcome';
import Intro from './src/screen/Intro';
import Loading from './src/screen/Loading';
import Intro1 from './src/screen/Intro1';
import Intro2 from './src/screen/Intro2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="loading" component={Loading} /> */}
        {/* <Stack.Screen name="welcome" component={Welcome} /> */}
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="intro1" component={Intro1} />
        <Stack.Screen name="intro2" component={Intro2} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>hello</Text>
    // </View>
  )
}

export default App;

const styles = StyleSheet.create({})