import {NextRequest, NextResponse} from "next/server";
import pool from "@/lib/db";
// type MyData ={
//   name:string
// }

export async function GET (request: NextRequest, response: NextResponse){
    const [rows] = await pool.query(`SELECT Wo_Posts.postText,Wo_Users.first_name,Wo_Users.last_name,Wo_Posts.post_id FROM Wo_Posts INNER JOIN Wo_Users ON Wo_Users.user_id  = Wo_Posts.user_id AND field_work1 != ''`);
    return NextResponse.json(rows);
}