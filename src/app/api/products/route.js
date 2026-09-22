import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let data = [];
    let success=true;
    try {
      await mongoose.connect(connectionStr);
      data =await Product.find();
    } catch (error) {
        data={result:"error"}
        success = false;
    }
    return NextResponse.json({result:data,success:success})
}

export async function POST(req){
    const payload = await req.json();
    
    await mongoose.connect(connectionStr);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({result,success:true})
}