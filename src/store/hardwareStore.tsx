import {create} from "zustand"
import {HardwareSchema} from '../Schemas/SchemaHardware'


interface HardwareStore {
	hardwareItems: HardwareSchema[];
	addHardware(hardware: HardwareSchema): void;
}

export const useHardwareStore = create<HardwareStore>((set) => ({
	hardwareItems: [],
	addHardware: (hardware) => set((state) => (
		{hardwareItems: [...state.hardwareItems, hardware]}
	)),
}));