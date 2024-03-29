import React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const ShowTable = () => {
  return (
    <div>
        <TableContainer mt='20' ml='3em' mr='3em'>
  <Table variant='striped' colorScheme='lightgray'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>

    </Thead>
    <Tbody>
      <Tr>
        <Td>Saturday, April 13</Td>
        <Td> @ The Garden- Napa, CA </Td>
        <Td>Tickets</Td>
      </Tr>
      <Tr>
        <Td>Saturday, April 20</Td>
        <Td>@ Lagunitas Taproom - Petaluma, CA</Td>
        <Td>Tickets</Td>
      </Tr>
      <Tr>
        <Td>Saturday May 18</Td>
        <Td>@ Henhouse Brewing - Santa Rosa, CA</Td>
        <Td>Tickets</Td>
      </Tr>
      <Tr>
        <Td>Saturday June 15</Td>
        <Td>@ The Freshtival - Cotati, CA</Td>
        <Td>Tickets</Td>
      </Tr>
      <Tr>
        <Td>Saturday July 5</Td>
        <Td>@ Hook & Ladder Winery - Santa Rosa, CA</Td>
        <Td>Tickets</Td>
      </Tr>
    </Tbody>
   
  </Table>
</TableContainer>
      
    </div>
  )
}

export default ShowTable;
