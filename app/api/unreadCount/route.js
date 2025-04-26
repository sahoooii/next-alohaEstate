import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import connectDB from '@/config/database';
import Message from '@/models/Message';
import Profile from '@/models/Profile';

export async function GET() {
	try {
		await connectDB();

		const { userId: clerkId } = auth();

		const user = await Profile.findOne({ clerkId });

		if (!user) return NextResponse.json({ count: 0 });

		const unreadCount = await Message.countDocuments({
			recipient: user._id,
			read: false,
		});

		return NextResponse.json({ count: unreadCount });
	} catch (error) {
		console.error('Unread count error:', error);

		return NextResponse.json(
			{ count: 0, error: 'Failed to fetch' },
			{ status: 500 }
		);
	}
}
