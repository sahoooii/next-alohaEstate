import { IconType } from 'react-icons';

import {
	FiTruck,
	FiWind,
	FiSun,
	FiBox,
	FiDroplet,
	FiMapPin,
	FiSunrise,
	FiHeadphones,
	FiTv,
} from 'react-icons/fi';
import {
	PiWashingMachineDuotone,
	PiWaves,
	PiSwimmingPool,
	PiTowel,
	PiFirstAid,
} from 'react-icons/pi';
import { BiSolidDryer } from 'react-icons/bi';
import { FaSquareParking, FaKitchenSet, FaWifi, FaBath } from 'react-icons/fa6';
import { CgGym } from 'react-icons/cg';
import {
	MdOutlineFireplace,
	MdMicrowave,
	MdOutlineOutdoorGrill,
	MdOutlineChair,
} from 'react-icons/md';
import { TbAirConditioning, TbToolsKitchen } from 'react-icons/tb';
import { SiPicnic } from 'react-icons/si';

export type Amenity = {
	name: string;
	icon: IconType;
	selected: boolean;
};

export const amenities: Amenity[] = [
	{ name: 'ocean view', icon: PiWaves, selected: false },
	{ name: 'pool', icon: PiSwimmingPool, selected: false },
	{ name: 'free parking', icon: FaSquareParking, selected: false },
	{ name: 'free WiFi', icon: FaWifi, selected: false },
	{ name: 'washer', icon: PiWashingMachineDuotone, selected: false },
	{ name: 'dryer', icon: BiSolidDryer, selected: false },
	{ name: 'full kitchen', icon: FaKitchenSet, selected: false },
	{ name: 'gym', icon: CgGym, selected: false },
	{ name: 'hot tab', icon: FaBath, selected: false },
	{ name: 'fireplace', icon: MdOutlineFireplace, selected: false },
	{ name: 'microwave', icon: MdMicrowave, selected: false },
	{ name: 'BBQ grill', icon: MdOutlineOutdoorGrill, selected: false },
	{ name: 'outdoor furniture', icon: MdOutlineChair, selected: false },
	{ name: 'air conditioning', icon: TbAirConditioning, selected: false },
	{ name: 'towels', icon: PiTowel, selected: false },
	{ name: 'picnic table', icon: SiPicnic, selected: false },
	{ name: 'cooking utensils', icon: TbToolsKitchen, selected: false },
	{ name: 'first aid kit', icon: PiFirstAid, selected: false },
];
