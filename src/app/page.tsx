import { HighlightCard } from "@/components/HighlightCard";
import { listItems } from "@/data/data";

export default function Home() {
  return (
    <>
      <HighlightCard
        title="Notifications"
        description="You have 3 unread messages."
        list={listItems}
      />
    </>
  );
}
