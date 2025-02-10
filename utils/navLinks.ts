import { MdFavoriteBorder, MdOutlineMapsHomeWork } from 'react-icons/md';
import { TbHomePlus } from 'react-icons/tb';
import { VscPreview } from 'react-icons/vsc';
import { BsPersonGear } from 'react-icons/bs';
import { AiOutlineMessage, AiOutlineHome } from 'react-icons/ai';
import { GrSchedule, GrUserAdmin } from 'react-icons/gr';
import { IconType } from 'react-icons/lib';

type NavLink = {
	href: string;
	label: string;
	icon: IconType;
};

export const navLinks: NavLink[] = [
	{ href: '/', label: 'home', icon: AiOutlineHome },
	{ href: '/favorites', label: 'favorites', icon: MdFavoriteBorder },
	{ href: '/reviews', label: 'reviews', icon: VscPreview },
	{ href: '/bookings', label: 'bookings', icon: GrSchedule },
	// { href: '/reservations', label: 'reservations', icon: GrSchedule },
	{ href: '/rentals/create ', label: 'add rental', icon: TbHomePlus },
	{ href: '/rentals', label: 'my rentals', icon: MdOutlineMapsHomeWork },
	{ href: '/messages', label: 'Messages', icon: AiOutlineMessage },
	{ href: '/profile ', label: 'profile', icon: BsPersonGear },
	{ href: '/admin ', label: 'admin', icon: GrUserAdmin },
];
