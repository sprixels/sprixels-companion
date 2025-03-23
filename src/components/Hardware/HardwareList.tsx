import classes from './Hardware.module.css';

import { Table, Checkbox, Button, Box  } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useHardwareStore } from '@/store/hardwareStore';
import {HardwareSchema} from '@/Schemas/SchemaHardware'

export function HWList(){	
	const {hardwareItems} = useHardwareStore()
	const currentHardware = useHardwareStore((state) => state.currentHardware)
	const updateCurrentHardware = useHardwareStore((state)=>state.updateCurrentHardware);
	const [selectedRow, setSelectedRow] = useState<number | null>(0);
	
	function test(id: number){
		console.log("Click Call",id)
		updateCurrentHardware(id)
	}

	function deleteHW(){

	}
	function pixelGroups(){

	}


	let HwOptions = <></>;
	
	if (selectedRow){
		HwOptions = <div>
			<Button variant="default" onClick={(event) => deleteHW()}>
				Delete
			</Button>
			<Button variant="default" onClick={(event) => pixelGroups()}>
				Pixel Groups
			</Button>
		</div>
	}

	const rows = hardwareItems.map((hwItem, idx) => (
    <Table.Tr
      key={idx}
      bg={selectedRow==(currentHardware) ? 'var(--mantine-color-blue-light)' : undefined}			
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={idx==(currentHardware)}
          //onChange={(event) => setSelectedRow(event.currentTarget.checked? hwItem.ID : 0)
					onChange={(event) => test(event.currentTarget.checked? idx : 0)
					
          }
        />
      </Table.Td>
      <Table.Td>{hwItem.ID}</Table.Td>
      <Table.Td>{hwItem.Label}</Table.Td>
      <Table.Td>{hwItem.HWType}</Table.Td>
      <Table.Td>{hwItem.HWPins}</Table.Td>
    </Table.Tr>
  ));

	return(
		<>
		<Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>ID</Table.Th>
          <Table.Th>Label</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>HW Pins</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
		{HwOptions}
		</>
	)
}

