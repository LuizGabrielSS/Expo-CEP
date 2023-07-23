import React from 'react';
import TelaPadrao from './src/components/defaultScreen';
import { NativeBaseProvider} from "native-base";
import Search from './src/pages/search'

export default function App() {
  return (
    <NativeBaseProvider>
      <TelaPadrao>
        <Search/>
      </TelaPadrao>
    </NativeBaseProvider>
  );
}