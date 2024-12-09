'use server';

import connectDB from '@/config/database';
import { getAuthUser, renderError } from './Auth';

export const createReviewAction = async () => {
	return { message: 'Create Review' };
};

export const fetchPropertyReviews = async () => {
	return { message: 'Fetch Review' };
};

export const fetchPropertyReviewsByUser = async () => {
	return { message: 'fetch Reviews' };
};

export const deleteReviewAction = async () => {
	return { message: 'Delete Review' };
};
