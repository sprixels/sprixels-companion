import classes from './Sprixels.module.css';
import { Grid, Box, Center } from '@mantine/core';
import {HardwareAdd} from '../Hardware/Hardware';
import {HWList} from '../Hardware/HardwareList'

const Col = Grid.Col

export interface Hardware {
	ID: number;	
	Label: string;
	HWType: string;
	HWPins: number[] 
	Length?: number;
	Inactive?: number[]
	Mode?: string
	DisplayFormat?: {
		DispWidth: number
		DispHeight: number
		DispStack: number
	}
}

export function Sprixels() {
	
  return (
			<Box className={classes.Wrapper}>
      <Grid
				gutter={{ base: 'sm', md: 'md', lg: 'xl' }}
      >
        <Col span={{ base: 12, md: 6, lg: 4 }} >
					<Box bg="gray.9"><HardwareAdd /></Box>
				</Col>
        <Col span={{ base: 12, md: 6, lg: 4 }}>
					<Box bg="gray.9"><HWList/></Box>
				</Col>
        <Col span={{ base: 12, md: 6, lg: 4 }}>
					<Box bg="gray.9">2</Box>
				</Col>
				<Col span={{ base: 12, md: 6, lg: 4 }}>
					<Box bg="gray.9">2</Box>
				</Col>
      </Grid>
			</Box>
	)
}