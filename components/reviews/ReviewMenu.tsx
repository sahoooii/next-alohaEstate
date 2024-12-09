import {
	FaRegFaceDizzy,
	FaRegFaceFrownOpen,
	FaRegFaceMeh,
	FaRegFaceLaughBeam,
	FaRegFaceKissWinkHeart,
} from 'react-icons/fa6';
import { IconType } from 'react-icons';

export type Review = {
	value: string;
	icon: IconType;
	title: string;
};

const ReviewMenu: Review[] = [
	{
		value: '1',
		icon: FaRegFaceDizzy,
		title: '1 -- Nop, I will never stay again',
	},
	{
		value: '2',
		icon: FaRegFaceFrownOpen,
		title: '2 -- Maybe, if on the sale, stay again',
	},
	{
		value: '3',
		icon: FaRegFaceMeh,
		title: '3 -- Okay, not bad',
	},
	{
		value: '4',
		icon: FaRegFaceLaughBeam,
		title: '4 -- Yes!! This is MY PLACE!',
	},
	{
		value: '5',
		icon: FaRegFaceKissWinkHeart,
		title: '4 -- Love it!! Want to stay rest of my LIFE!',
	},
];

export default ReviewMenu;
