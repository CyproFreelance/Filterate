import { connectMongoDB } from "@/lib/mongodb";
import User from '@/models/users';
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
    try {
        const { email, username } = req.json();
        
        await connectMongoDB();
        
        const user = await User.findOne( email , username ).select('_id');
        
        if (user) {
            return NextResponse.json({ userExists: true });
        } else {
            return NextResponse.json({ userExists: false });
        }
    } catch (error) {
        console.error('Error checking user existence:', error);
    }
}
