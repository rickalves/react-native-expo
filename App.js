import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/views/Cesta';
import mocks from './src/mocks/cesta'
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mocks}/>
    </SafeAreaView>
  );
}


