import classes from './Hardware.module.css';
import { Table, Checkbox, Button, Box  } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useHardwareStore } from '@/store/hardwareStore';
import {HardwareSchema} from '@/Schemas/SchemaHardware'

export function HWPixels(){
	const {hardwareItems} = useHardwareStore()
	const currentHardware = useHardwareStore((state) => state.currentHardware)
	const [selectedRow, setSelectedRow] = useState<number | null>(0);

	let PixelGrid = <></>;

	let idx = 0
		let found = false;
		let item = {} as HardwareSchema
		if (currentHardware < hardwareItems.length){
			item = hardwareItems[currentHardware]
			found = true
		}
		if(found){
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
			
			return(
				<div className={[classes.LightFrame, classes.preFix].join(' ')}>
					{pix}
				</div>
			)		
		}

	
	

}
