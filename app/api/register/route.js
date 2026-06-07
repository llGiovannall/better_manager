import { NextRequest, NextResponse } from "next/server";
import pool from "../../../lib/db";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { user, email, password } = await request.json();
    if (!user|| !email || !password) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });}

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      await pool.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
        [user, email, hashedPassword]
      );
      
      return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
      console.error("Error inserting user:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }


}