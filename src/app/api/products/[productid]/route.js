import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server"

export async function PUT(request,content){
    const {productid} = await content.params;
    const filter = {_id:productid};
    const payload = await request.json()
    console.log(payload)
    await mongoose.connect(connectionStr);
    const result = await Product.findOneAndUpdate(filter,payload)
    console.log(result)
    return NextResponse.json({result:result,success:true})
}

export async function GET(request,content){
    const {productid} = await content.params;
    console.log(productid)
    const record = {_id:productid};
    await mongoose.connect(connectionStr);
    const result = await Product.findOne(record) 
    return NextResponse.json({result:result,success:true})
}

export async function DELETE(request,content){
    const {productid} = await content.params;
    const record = {_id:productid};
    await mongoose.connect(connectionStr);
    const result = await Product.deleteOne(record)
    return NextResponse.json({result:result,success:true})
}