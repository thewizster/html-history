import Hero from "./_components/Hero.tsx";
import Sidebar from "./_components/Sidebar.tsx";
import TimelineCard from "./_components/TimelineCard.tsx";
import RightSidebar from "./_components/RightSidebar.tsx";

interface TimelineItem {
  year: number;
  title: string;
  desc: string;
  category?: string;
  icon?: string;
  image?: string;
}

interface Milestone {
  id: string;
  title: string;
  year: number;
  isActive?: boolean;
}

interface SiteData {
  timeline: TimelineItem[];
  milestones: Milestone[];
  stats: {
    totalEntries: number;
    yearsSpanned: number;
    majorVersions: number;
  };
  quickFacts: string[];
}

export const title = "The History of HTML";
export const layout = "layout.tsx";

export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  // Sort timeline data by year
  const siteData = data.site as SiteData;
  const sortedTimeline = [...siteData.timeline].sort((a: TimelineItem, b: TimelineItem) => a.year - b.year);

  return (
    <>
      <Hero title="The History of HTML" subtitle="A journey through the evolution of the web's foundation" />
      
      <div class="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[280px_1fr_320px] gap-8 px-4 xl:px-8 pt-16 items-start">
        {/* Left Sidebar */}
        <div class="xl:sticky xl:top-8 xl:h-fit">
          <Sidebar milestones={siteData.milestones} title="HTML Milestones" />
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
          <RightSidebar stats={siteData.stats} quickFacts={siteData.quickFacts} />
        </div>
      </div>
    </>
  );
};