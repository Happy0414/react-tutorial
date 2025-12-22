import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, ChakraProvider, Text } from '@chakra-ui/react'
import './App.css'
import { Title } from './Title'

function App() {
  return (
    <ChakraProvider>
    <div>
      <Text fontSize="2x1">家計簿アプリ</Text>
    </div>
    </ChakraProvider>
    
  )
}

export default App
