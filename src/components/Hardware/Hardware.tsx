import classes from './Sprixels.module.css';
import { Grid, Box, Center, Select, Button, Notification  } from '@mantine/core';
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
console.log(listData)


export function HardwareAdd() {
	const {addHardware} = useHardwareStore()
	const [hwOption, setHWOption] = useState<string | null>('');
	
	function addItemToHW(){
		let target =  HARDWARES.find(item => {
			return item.ID.toString() == hwOption
	 }) as HardwareSchema
	 console.log(target)
	 addHardware(target);
	}
	
	let Notify = <></>;
	if(!hwOption){
		Notify = <Notification withBorder title="We notify you that">
			You are now obligated to give a star to Mantine project on GitHub
		</Notification>;
	}

  return (
		<>			
			<Select
				label="Select Hardware to Add"
				placeholder="--Select--"
				onChange={setHWOption}
				data={listData}
			/>
			<Button variant="default" onClick={(event) => addItemToHW()}>
        Add
      </Button>
			{Notify}
		
		</>
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

