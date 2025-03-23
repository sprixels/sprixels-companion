export const HARDWARES = [
	{
		"ID"	: 1,
		"Label" : "LightFrame Small",
		"HWType": "FrameStrip",
		"HWPins": [2],
		"Length": 31,
		"Inactive": [3,7,11,15,19,23,27],
		"Mode": "GRB",
		"DisplayFormat":{
			"DispWidth": 3,
			"DispHeight": 3,
			"DispStack": 2
		}
	},
	{
		"ID"	: 2,
		"Label" : "LightFrame Med Vertical",
		"HWType": "FrameStrip",
		"HWPins": [2],
		"Length": 47,
		"Inactive": [3,11,15,23,27,35,39],
		"Mode": "GRB",
		"DisplayFormat":{
			"DispWidth": 3,
			"DispHeight": 7,
			"DispStack": 2
		}
	},
	{
		"ID"	: 3,
		"Label" : "LightFrame Med Horizontal",
		"HWType": "FrameStrip",
		"HWPins": [2],
		"Length": 47,
		"Inactive": [7,11,19,23,31,35,43],
		"Mode": "GRB",
		"DisplayFormat":{
			"DispWidth": 7,
			"DispHeight": 3,
			"DispStack": 2
		}
	},
	{
		"ID"	: 4,
		"Label" : "LightFrame Large",
		"HWType": "FrameStrip",
		"HWPins": [2],
		"Length": 62,
		"Inactive": [7,15,23,31,39,47,55],
		"Mode": "GRB",
		"DisplayFormat":{
			"DispWidth": 7,
			"DispHeight": 7,
			"DispStack": 2
		}
	},
	{
		"ID"	: 5,
		"Label" : "LCD 1.8\" 160x128",
		"HWType": "LCD",
		"HWPins": [2,3,4,5,6,7],
		"Length": 20480,
		"Inactive": [],
		"Mode": "RRRRRGGGGGGBBBBB",
		"DisplayFormat":{
			"DispWidth": 160,
			"DispHeight": 128,
			"DispStack": 1,
			"Orientation": 0
		}
	},
	{
		"ID"	: 6,
		"Label" : "Matrix 8x8",
		"HWType": "Grid",
		"HWPins": [3],
		"Length": 64,
		"Inactive": [],
		"Mode": "GRB",
		"DisplayFormat":{
			"DispWidth": 8,
			"DispHeight": 8,
			"DispStack": 1
		}
	},
	{
		"ID"	: 7,
		"Label" : "Matrix 16x16",
		"HWType": "Grid",
		"HWPins": [3],
		"Length": 256,
		"Inactive": [],
		"Mode": "GRB",
		"DisplayFormat":{
			"DispWidth": 16,
			"DispHeight": 16,
			"DispStack": 1
		}
	},
	{
		"ID"	: 8,
		"Label" : "Aux 8 Strip",
		"HWType": "Strip",
		"HWPins": [4],
		"Length": 8,
		"Inactive": [],
		"Mode": "GRB",
		"DisplayFormat":{
			"DispWidth": 8,
			"DispHeight": 1,
			"DispStack": 1
		}
	}
]