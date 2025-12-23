import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, ChakraProvider, Text, Checkbox, Flex, Input} from '@chakra-ui/react'
import './App.css'
import { Title } from './Title'

function App() {
  return (
    <ChakraProvider>
    <div>
      <Text fontSize="2x1">家計簿アプリ</Text>
      <div>
        <Input placeholder='支出を入力' mb="4px" />
        <Flex align="center" justifyContent="space-between">
          <Checkbox w="100px">入金</Checkbox>
          <Button colorScheme="teal">追加</Button>
        </Flex>
      </div>
    </div>
    </ChakraProvider>
    
  )
}

export default App
