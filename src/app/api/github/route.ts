import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https:';

export async function GET( req: Request ) {
  const { searchParams } = new URL( req.url );
  const owner = searchParams.get( 'owner' );

  if ( !owner ) {
    return NextResponse.json( { error: 'Missing "owner" query parameter' }, { status: 400 } );
  }

  try {

    const res = await fetch( `${ GITHUB_API_URL }${ owner }/repos` );
    if ( !res.ok ) {
      throw new Error( 'Error fetching repositories' );
    }

    const data = await res.json();

    return NextResponse.json( data );
  } catch ( error ) {
    console.error( error );
    return NextResponse.json( { error: 'Error fetching GitHub data' }, { status: 500 } );
  }
}
