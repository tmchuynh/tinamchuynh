import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import { RepoData } from "@/data/types";
import { formatDate, formatTitle } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ProjectCard( {
	repo,
}: {
	repo: RepoData;
} ) {
	const router = useRouter();

	// Make sure topics exists before trying to map over it
	const topics = repo.topics || [];
	const languages = repo.languages || {};

	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState( false );

	useEffect( () => {
		setMounted( true );
	}, [] );

	return (
		<Card className="w-[350px]">
			<CardHeader className="pb-0">
				<CardTitle>{formatTitle( repo.name )}</CardTitle>
				<CardDescription>{repo.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid w-full items-center gap-4">
					<div><strong>Created at:</strong> {formatDate( repo.created_at )}</div>
					<div className="flex flex-col">
						<strong>Topics:</strong>
						<div>
							{topics.length > 0 ? (
								topics.map( ( topic, index ) => (
									<Badge variant={theme === "dark" ? "accent" : "secondary"} key={index}>{topic}</Badge>
								) )
							) : (
								<span>No topics available</span>
							)}
						</div>
					</div>
					<div className="flex flex-col">
						<strong>Languages:</strong>
						<div>
							{Object.keys( languages ).length > 0 ? (
								Object.entries( languages ).map( ( [language, count], index ) => (
									<Badge variant={theme === "dark" ? "tertiary" : "highlight"} key={index}>{language}</Badge>
								) )
							) : (
								<span>No languages data</span>
							)}
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button
					variant={theme === "dark" ? "outline" : "default"}
					onClick={() => router.push( repo.url )}>View GitHub</Button>
			</CardFooter>
		</Card>
	);
}
