import {create} from "zustand"
import {HardwareSchema} from '../Schemas/SchemaHardware'


interface HardwareStore {
	hardwareItems: HardwareSchema[];
	currentHardware: number;
	updateCurrentHardware: (id:number) => void
	addHardware:(hardware: HardwareSchema) => boolean;
}

export const useHardwareStore = create<HardwareStore>((set, get) => ({
	hardwareItems: [],
	currentHardware: 0,
	updateCurrentHardware: (id) => {
		set({
			currentHardware:id
		})
	},
	addHardware: (hardware) => {
			let add = true
			if(hardware.HWType == "FrameStrip"){
				//CHECK IF WE ALREADY HAVE A FRAME ADDED				
				if(get().hardwareItems.findIndex(x => x.HWType == "FrameStrip") != -1){
					//alert("A Frame already exists. Remove existing frame to replace")
					add = false;
					return false
				}				
			}
			if(add){
				set((state) => (		
				{
					hardwareItems: [...state.hardwareItems, hardware]					
				}
				))
			}
			return true
	}
}));