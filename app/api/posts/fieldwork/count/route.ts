import { NextRequest, NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";
import pool from "@/lib/db";

export async function GET(request: NextRequest, response: NextResponse) {
    const counts = [];

    for (let i = 1; i <= 6; i++) {
        const fieldName = `countFieldWork${i}`;
        const [result] = await pool.query(`SELECT count(post_id) AS ${fieldName} FROM Wo_Posts WHERE field_work1 LIKE '%${i}%'`);

        // Check if result is not empty or undefined
        const countValue = (result as RowDataPacket[])[0]?.[fieldName] || 0;

        counts.push({ [fieldName]: countValue });
    }

    return NextResponse.json(counts);
}
