import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn( ...inputs: ClassValue[] ) {
  return twMerge( clsx( inputs ) );
}

export function formatDate( dateString: string ): string {
  const date = new Date( dateString );
  return new Intl.DateTimeFormat( 'en-US' ).format( date );
}

export function formatTitle( title: string ): string {
  const words = title.split( "-" ).map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) ).join( " " );;
  const formattedTitle = words.split( "_" ).map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) ).join( " " );
  return formattedTitle;
}