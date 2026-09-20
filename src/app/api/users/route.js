import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({name:"anil",age:28,city:"noida"},{status:200})
}