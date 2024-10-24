import { IconType } from 'react-icons';
import {
	PiHouseLineBold,
	PiHouseLight,
	PiBuildingApartment,
} from 'react-icons/pi';
import { MdOutlineHouseSiding, MdOutlineCottage } from 'react-icons/md';
import { FaHouseFloodWater } from 'react-icons/fa6';

type Category = {
	label: CategoryLabel;
	icon: IconType;
};

export type CategoryLabel =
	| 'house'
	| 'condo/apartment'
	| 'cottage'
	| 'lodge'
	| 'Overwater villa';

export const categories: Category[] = [
	{
		label: 'house',
		icon: PiHouseLineBold,
	},
	{
		label: 'condo/apartment',
		icon: PiBuildingApartment,
	},
	{
		label: 'cottage',
		icon: MdOutlineCottage,
	},
	{
		label: 'lodge',
		icon: MdOutlineHouseSiding,
	},
	{
		label: 'Overwater villa',
		icon: FaHouseFloodWater,
	},
];
