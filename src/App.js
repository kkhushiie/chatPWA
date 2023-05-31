import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import "./Components/message.css"
import Footer from "./Components/Footer"
import Message from "./Components/Message"
import Data from "./Components/Data"
import Header from "./Components/Header"
import Line from "./Components/Line"

function App() {
  return (     
<ChakraProvider> 
   <Header/>
   <Line/>
   <Message/>
   <Data/>
   <Footer/>
</ChakraProvider>
  )};
export default App;