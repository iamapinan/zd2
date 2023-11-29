import {NextRequest, NextResponse} from "next/server";
import pool from "@/lib/db";

export async function GET (request: NextRequest, response: NextResponse){
    const [rows] = await pool.query("SELECT * FROM Wo_Users");
    return NextResponse.json(rows);
}