import classes from './Sprixels.module.css';
import { Grid, Box, Center, Collapse, Button, Group, Card, Image, Text, Badge, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {HardwareAdd} from '../Hardware/HardwareAdd';
import {HWList} from '../Hardware/HardwareList';
import {HWPixels} from '../Hardware/HardwarePixels'

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
	const [opened, toggle1] = useDisclosure(false);
	const [opened2, toggle2] = useDisclosure(false);

	let close1 = <></>
	let open1 = <></>
	if (opened) {
		close1 = <Badge color="blue" size="lg" onClick={toggle1.close}>Close</Badge>
	}
	else{
		open1 = <Button color="blue" fullWidth mt="md" radius="md" onClick={toggle1.toggle}>Open</Button>
	}
	let close2 = <></>
	let open2 = <></>
	if (opened2) {
		close2 = <Badge color="blue" size="lg" onClick={toggle2.close}>Close</Badge>
	}
	else{
		open2 = <Button color="blue" fullWidth mt="md" radius="md" onClick={toggle2.toggle}>Open</Button>
	}

  return (
			<Box className={classes.Wrapper} mt="md">
      <Grid
				gutter={{ base: 'sm', md: 'md', lg: 'xl' }}
      >
        <Col span={{ base: 12, md: 6, lg: 4 }} >
					
					<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Card.Section>
						<Collapse in={!opened}>
							<Image
								src="https://cdn.pixabay.com/photo/2024/01/29/22/24/pattern-8540874_960_720.png"
								height={120}
								alt="Norway"
							/>
							</Collapse>
						</Card.Section>

						<Group justify="space-between" mt="md" mb="xs">
							<Text fw={500} size="xl">Sprixels Hardware</Text>
							{close1}
						</Group>

						<Text size="md" c="dimmed">
							Add, remove and configure the hardware of your Sprixels device. <br/>
							Advanced users only.
						</Text>

						
						{open1}
						
						<Collapse in={opened}>
							<Divider my="sm" variant="dashed" />
							<HardwareAdd />		
							<Divider my="sm" variant="dashed" />	
							<HWList/>				
						</Collapse>

					</Card>

				</Col>
        <Col span={{ base: 12, md: 6, lg: 4 }}>
				<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Card.Section>
							<Collapse in={!opened2}>
							<Image
								src="https://media.istockphoto.com/id/1165776773/vector/glow-squares-abstract-dark-background.jpg?s=2048x2048&w=is&k=20&c=vPDHuBdIGUETjJEfIZiR2n-a0ubKvs-YueYVRBF0lpY="
								height={120}
								alt="Norway"
							/>
							</Collapse>
						</Card.Section>

						<Group justify="space-between" mt="md" mb="xs">
							<Text fw={500} size="xl">Pixel Groups</Text>
							{close2}
						</Group>

						<Text size="md" c="dimmed">
							Add, remove and configure pixel groupings and offsets to apply effects to in a timeline.
						</Text>

						{open2}
						
						<Collapse in={opened2}>
							<Divider my="sm" variant="dashed" />
							<HWList/>	
							<Divider my="sm" variant="dashed" />	
							<HWPixels/>
						</Collapse>

					</Card>

				</Col>
        <Col span={{ base: 12, md: 6, lg: 4 }}>
					<Box bg="gray.9"></Box>
				</Col>
				<Col span={{ base: 12, md: 6, lg: 4 }}>
					<Box bg="gray.9">2</Box>
				</Col>
      </Grid>
			</Box>
	)
}