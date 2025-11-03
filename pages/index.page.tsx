import Hero from "./_components/Hero.tsx";
import Sidebar from "./_components/Sidebar.tsx";
import TimelineCard from "./_components/TimelineCard.tsx";
import RightSidebar from "./_components/RightSidebar.tsx";
import { createTimelineStore } from "./_data/timeline-store.ts";
import type { SiteData, TimelineItem } from "./_types/timeline.ts";

export const title = "The History of HTML";
export const layout = "layout.tsx";

export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  // Get validated data from store
  const store = createTimelineStore();
  const siteData = data.site as SiteData;
  store.setData(siteData);
  
  // Sort timeline data by year with validation
  const sortedTimeline = store.getTimeline();

  return (
    <>
      <Hero title="The History of HTML" subtitle="A journey through the evolution of the web's foundation" />
      
      <div class="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[280px_1fr_320px] gap-8 px-4 xl:px-8 pt-16 items-start">
        {/* Left Sidebar */}
        <div class="xl:sticky xl:top-8 xl:h-fit">
          <Sidebar milestones={store.getMilestones()} title="HTML Milestones" />
        </div>

        {/* Main Content */}
        <main class="min-h-screen">
          <div class="space-y-8">
            {sortedTimeline.map((item: TimelineItem, _index: number) => (
              <div key={item.year + item.title}>
                <TimelineCard item={item} />
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <div>
          <RightSidebar stats={store.getStats()} quickFacts={store.getQuickFacts()} />
        </div>
      </div>
    </>
  );
};