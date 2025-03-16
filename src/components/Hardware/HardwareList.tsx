import classes from './Hardware.module.css';

import { Table, Checkbox, Button, Box  } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useHardwareStore } from '@/store/hardwareStore';
import {HardwareSchema} from '@/Schemas/SchemaHardware'

export function HWList(){	
	const {hardwareItems} = useHardwareStore()
	const [selectedRow, setSelectedRow] = useState<number | null>(0);
	

	function deleteHW(){

	}
	function pixelGroups(){

	}


	let HwOptions = <></>;
	let PixelGrid = <></>;
	if (selectedRow){
		HwOptions = <div>
								<Button variant="default" onClick={(event) => deleteHW()}>
									Delete
								</Button>
								<Button variant="default" onClick={(event) => pixelGroups()}>
									Pixel Groups
								</Button>
							</div>;


		let idx = 0
		let found = false;
		let item = {} as HardwareSchema
		for(let hwItem of hardwareItems){
			if(hwItem.ID == selectedRow){
				item = hardwareItems[idx];
				found = true;
				break;
			}
			idx += 1;
		}
		if(!found){
			alert("HW Not Found");
		}
		
		console.log("Test")
		console.log(item)
		let Divs = []
		let preFix = '';
		let LEDs = ((item.DisplayFormat.DispWidth * 2) + (item.DisplayFormat.DispHeight * 2)) * item.DisplayFormat.DispStack;
		if (item.ID == 1){
			preFix = 'lfs';
		}
		else if (item.ID == 2){
			preFix = 'lfmv';
		}
		else if (item.ID == 3){
			preFix = 'lfmh';
		}
		else if (item.ID == 4){
			preFix = 'lfl';
		}
		for (let i=1; i<=LEDs; i++){
			Divs.push({'c':preFix+'d'+i});
		}
		let dir = 0;
		let skip = 0;
		let cnt = 0;
		const pix = Divs.map((thisDiv, idx) => {
			if(((cnt % item.DisplayFormat.DispWidth == 0) && cnt>0) && dir == 0){
				skip += 1;
				dir = 1;
				cnt = 0;
			}
			else if(((cnt % item.DisplayFormat.DispHeight == 0) && cnt>0) && dir ==1){
				skip += 1;
				dir = 0;
				cnt = 0
			}
			cnt++;
			return <div key={idx} className={classes[thisDiv.c]}>{idx} | {idx+skip}</div>
		});
		
		PixelGrid = <div className={[classes.LightFrame, classes.preFix].join(' ')}>
			{pix}
		</div>		
	}

	const rows = hardwareItems.map((hwItem, idx) => (
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
		{PixelGrid}
		</>
	)
}

