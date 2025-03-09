export interface HardwareSchema {
	ID: number;	
	Label: string;
	HWType?: string;
	HWPins?: number[] 
	Length?: number;
	Inactive?: number[]
	Mode?: string
	DisplayFormat?: {
		DispWidth: number
		DispHeight: number
		DispStack: number
	}
}