import { NextResponse } from "next/server";

export async function GET(request,content) {
    const item = await content.params;
    console.log(item.student)
    return NextResponse.json({result:item.student})
}