import { IconType } from 'react-icons';
import { PiHouseLineBold, PiBuildingApartment } from 'react-icons/pi';
import { MdOutlineHouseSiding } from 'react-icons/md';
import { FaHouseFloodWater } from 'react-icons/fa6';
import { LuHotel } from 'react-icons/lu';

type Category = {
	label: CategoryLabel;
	icon: IconType;
};

export type CategoryLabel =
	| 'hotel'
	| 'house'
	| 'condo/apartment'
	| 'cottage/lodge'
	| 'overwater villa';

export const categories: Category[] = [
	{
		label: 'hotel',
		icon: LuHotel,
	},
	{
		label: 'house',
		icon: PiHouseLineBold,
	},
	{
		label: 'condo/apartment',
		icon: PiBuildingApartment,
	},
	{
		label: 'cottage/lodge',
		icon: MdOutlineHouseSiding,
	},
	{
		label: 'overwater villa',
		icon: FaHouseFloodWater,
	},
];
