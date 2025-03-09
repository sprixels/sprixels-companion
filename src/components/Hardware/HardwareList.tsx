import classes from './Sprixels.module.css';
import { Table, Checkbox, Button  } from '@mantine/core';
import { useState } from 'react';
import { useHardwareStore } from '@/store/hardwareStore';

export function HWList(){	
	const {hardwareItems} = useHardwareStore()
	const [selectedRow, setSelectedRow] = useState<number | null>(0);
	
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
							</div>;
	}

	const rows = hardwareItems.map((hwItem) => (
    <Table.Tr
      key={hwItem.Label}
      bg={selectedRow==(hwItem.ID) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRow==(hwItem.ID)}
          onChange={(event) => setSelectedRow(event.currentTarget.checked? hwItem.ID : 0)
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

