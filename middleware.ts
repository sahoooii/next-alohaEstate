import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/properties(.*)']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
	const userId = auth().userId;
	const adminIds = [
		process.env.NEXT_PUBLIC_ADMIN_USER_ID,
		process.env.NEXT_PUBLIC_ADMIN_TEST_USER_ID,
	].filter(Boolean);

	const isAdminUser = userId && adminIds.includes(userId);
	
	if (isAdminRoute(req) && !isAdminUser) {
		return NextResponse.redirect(new URL('/', req.url));
	}

	if (!isPublicRoute(req)) auth().protect();
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
