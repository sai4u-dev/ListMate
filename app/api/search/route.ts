import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase/client"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")?.toLowerCase() || ""

  if (!query) {
    return NextResponse.json([], { status: 200 })
  }

  try {
    const { data, error } = await supabase
      .from("products") // Replace with your actual table name
      .select("id, name") // Add more fields if needed
      .ilike("name", `%${query}%`) // Case-insensitive search

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Database error" }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Search API Error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
