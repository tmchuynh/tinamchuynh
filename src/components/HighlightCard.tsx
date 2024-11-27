
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

type List = {
	title: string;
	description: string;
};

type HighlightCardProps = React.ComponentProps<typeof Card> & {
	title: string;
	description: string;
	list: List[];
	onMarkAllAsRead?: () => void;
};

export function HighlightCard( {
	className,
	title,
	description,
	list,
	onMarkAllAsRead,
	...props
}: HighlightCardProps ) {
	return (
		<Card className={cn( "w-[380px] mx-5", className )} {...props}>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div>
					{list.map( ( item, index ) => (
						<div
							key={index}
							className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
						>
							<span className="flex h-2 w-2 translate-y-1 rounded-full bg-tertiary" />
							<div className="space-y-1">
								<p className="text-sm leading-none">{item.title}</p>
								<p className="text-sm text-highlight dark:opacity-70">{item.description}</p>
							</div>
						</div>
					) )}
				</div>
			</CardContent>
		</Card>
	);
}
