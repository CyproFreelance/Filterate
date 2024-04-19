import { connectMongoDB } from "@/lib/mongodb";
import Users from "@/models/users";
import { NextApiRequest  }  from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
    try {
        const value = await req.json();
        // console.log(value);

        await connectMongoDB();

        await Users.create(value)

        return NextResponse.json({ message: 'User Registered' }, {status: 201});
        
    } catch(error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed User Registration' }, {status: 500});
    }
}
