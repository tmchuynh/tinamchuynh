import { HighlightCard } from "@/components/HighlightCard";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export default function Home() {
  return (
    <>
      <HighlightCard
        title="Notifications"
        description="You have 3 unread messages."
        list={notifications}
      />
    </>
  );
}
