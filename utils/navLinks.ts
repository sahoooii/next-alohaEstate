import { MdFavoriteBorder, MdOutlineMapsHomeWork } from 'react-icons/md';
import { TbBrandBooking, TbHomePlus } from 'react-icons/tb';
import { VscPreview } from 'react-icons/vsc';
import { BsPersonGear } from 'react-icons/bs';
import { AiOutlineMessage, AiOutlineHome } from 'react-icons/ai';
import { IconType } from 'react-icons/lib';

type NavLink = {
	href: string;
	label: string;
	icon: IconType;
};

export const navLinks: NavLink[] = [
	{ href: '/', label: 'home', icon: AiOutlineHome },
	{ href: '/favorites ', label: 'favorites', icon: MdFavoriteBorder },
	{ href: '/bookings ', label: 'bookings', icon: TbBrandBooking },
	{ href: '/reviews ', label: 'reviews', icon: VscPreview },
	{ href: '/rentals/create ', label: 'create rental', icon: TbHomePlus },
	{ href: '/rentals', label: 'my rentals', icon: MdOutlineMapsHomeWork },
	{ href: '/messages', label: 'Messages', icon: AiOutlineMessage },
	{ href: '/profile ', label: 'profile', icon: BsPersonGear },
];
