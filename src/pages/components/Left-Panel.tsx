import { Flex } from '@chakra-ui/react'
import React from 'react'
import ChatList from './leftpanel/ChatList'
import Header from './leftpanel/Header'
import SearchPanel from './leftpanel/SearchPanel'

interface Props {

}

function LeftPanel({}: Props) {
  return (
     <Flex direction="column" w="30%">
      <Header />
      <SearchPanel />
      <ChatList flex="1" overflow='auto' />
    </Flex>
  )
}

export default LeftPanel