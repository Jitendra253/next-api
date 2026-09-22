import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export  async function GET(request,{params}){
    const {id} = await params
    const data = user;
    const userData = data.filter(item=>item.id == id)
   return NextResponse.json(
        userData.length === 0
            ? { result: "No data found", success: false }
            : { result: userData[0], success: true }
        );
}

export async function PUT(request,content){
    let payload = await request.json();
    const { id } = await content.params;
    payload.id = id
    console.log(payload);
    if(!payload.id || !payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"request datais not valid",success:false},{status:400})
    }
    return NextResponse.json({result:payload,success:true},{status:200})

}