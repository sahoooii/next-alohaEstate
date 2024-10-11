import mongoose from 'mongoose';
import colors from 'colors';

let connected = false;

const connectDB = async () => {
	mongoose.set('strictQuery', true);

	// If the db is already connected, din't connect again
	if (connected) {
		console.log(colors.green('Mongo DB is connected'));
		return;
	}
	// Connect to Mongo DB
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		connected = true;
	} catch (error) {
		console.log(colors.red(error));
	}
};

export default connectDB;
