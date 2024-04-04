import connectToDb from '../configs/db';
import { cookies } from 'next/headers';
import { verifyToken } from './auth/sign';
import userModel from '../models/users'

export default async function Me() {
    const token = cookies().get("token")?.value;
    const tokenPayLoad = verifyToken(token);
    connectToDb();
    const user = await userModel.findOne({ email: tokenPayLoad.email });
    return user
}
