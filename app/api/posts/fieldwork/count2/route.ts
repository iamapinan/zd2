import { NextRequest, NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";
import pool from "@/lib/db";

export async function GET(request: NextRequest, response: NextResponse) {
    const counts = [];

    for (let i = 1; i <= 6; i++) {
        const fieldName = `countFieldWork${i}`;
        const [result] = await pool.query(`SELECT count(post_id) AS ${fieldName} FROM Wo_Posts WHERE field_work2 LIKE '%${i}%'`);

        // Check if result is not empty or undefined
        const countValue = (result as RowDataPacket[])[0]?.[fieldName] || 0;

        counts.push({ [fieldName]: countValue });
    }

    // return NextResponse.json(counts,{
    //     headers:{
    //         "Access-Control-Allow-Origin":"*",
    //         "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS",
    //         "Access-Control-Allow-Headers":"Content-Type, Authorization"
    //     }
    // });
    return new Response(JSON.stringify(counts), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":"Content-Type, Authorization"
        },
        status: 200,
        statusText: "OK",
    });
}
