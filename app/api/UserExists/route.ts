import { connectMongoDB } from "@/lib/mongodb";
import User from '@/models/users';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, username } = await req.json();
        
        await connectMongoDB();
        
        // const user = await User.findOne({ email, username }).select('_id');
        const existingUserByEmail = await User.findOne({ email });
        const existingUserByUsername = await User.findOne({ username });

        if (existingUserByEmail) {
            return NextResponse.json({ userExists: true, message: 'Email is already taken' });
        }
        
        else if (existingUserByUsername) {
            return NextResponse.json({ userExists: true, message: 'Username is already taken' });
        } else {
            return NextResponse.json({ userExists: false})
        }
    } catch (error) {
        console.error('Error checking user existence:', error);
    }
}
