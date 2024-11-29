import { NextResponse } from "next/server";

const API_KEY = process.env.DEVTO;
const DEVTO_API_URL = "https://dev.to/api/articles/me";

export async function GET() {
  if ( !API_KEY ) {
    return NextResponse.json( { message: "API key is missing" }, { status: 500 } );
  }

  try {
    const response = await fetch( DEVTO_API_URL, {
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
    } );

    if ( !response.ok ) {
      throw new Error( "Failed to fetch articles" );
    }

    const articles = await response.json();

    return NextResponse.json( articles );
  } catch ( error ) {
    console.error( "Error fetching articles from Dev.to:", error );
    return NextResponse.json( { message: "Error fetching articles" }, { status: 500 } );
  }
}