import classes from './Sprixels.module.css';
import { Grid, Box, Center, Select, Button, Group, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { useHardwareStore } from '@/store/hardwareStore';
import {HardwareSchema} from '@/Schemas/SchemaHardware'

import {HARDWARES} from '../Settings/HardwareList'


interface SelectItem {
	value: string;
	label: string;
}

const listData: SelectItem[] = [];
for (var hw of HARDWARES){
	listData.push({value: hw.ID.toString(), label: hw.Label})
}


export function HardwareAdd() {
	const {addHardware} = useHardwareStore()
	const [hwOption, setHWOption] = useState<string | null>('')

	function addItemToHW(){
		let target =  HARDWARES.find(item => {
			return item.ID.toString() == hwOption
	 	}) as HardwareSchema

	 	if (!addHardware(target)){
			notifications.show({
				title: 'Error - Failed to add frame',
				message: 'A frame already exists in the hardware list. Remove the existing frame to replace.',
				color: 'red',
				withBorder: true,
				autoClose: 5000,
			});
	 	}
	}
	

  return (
		<Group grow preventGrowOverflow={false}>			
			<Select
				label="Select Hardware to Add"
				placeholder="--Select--"
				onChange={setHWOption}
				size="lg"
				mb=""
				mt="md"
				data={listData}
			/>
			<Box>
				<Text size="lg">&nbsp;</Text>
				<Button variant="filled" color="orange" size="md" mt="md" onClick={(event) => addItemToHW()}>
					Add Hardware
				</Button>		
			</Box>
		</Group>
	)
}


export const HWList = () => {	
	const {hardwareItems} = useHardwareStore()
	return(
		<>
			{hardwareItems.map((hwItem) => (
				<div key={hwItem.ID}>{hwItem.Label}{hwItem.HWPins}{hwItem.DisplayFormat?.DispHeight}</div>
			))}
		</>
	)
}

