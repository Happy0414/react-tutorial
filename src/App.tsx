import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, ChakraProvider, Text, Checkbox, Flex, Input, Box} from '@chakra-ui/react'
import './App.css'
import { Title } from './Title'

function App() {
  const testData = [
    {
      id: 1,
      title: 'お金を払う',
      isIncome: false,
      amount: 1000,
    },
    {
      id: 2,
      title: 'お金をもらう',
      isIncome: true,
      amount: 1000,
    }
  ]
  return (
    <ChakraProvider>
    <div>
      <Text fontSize="2x1">家計簿アプリ</Text>
      <Box mb="8px">
        <Input placeholder='支出を入力' mb="4px" />
        <Flex align="center" justifyContent="space-between">
          <Checkbox w="100px">入金</Checkbox>
          <Button colorScheme="teal">追加</Button>
        </Flex>
      </Box>
      <div>
        {testData.map((data) => (
          <div key={data.id}>
            <Flex align="center" justifyContent="space-between">
              <Text>{data.title}</Text>
              <Text>{data.isIncome ? "+" : "-"}{data.amount}</Text>
            </Flex>
          </div>
        ))}
      </div>
    </div>
    </ChakraProvider>
    
  )
}

export default App
