import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import MainStack from './src/components/stacks/MainStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style='light' />
      <MainStack />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
