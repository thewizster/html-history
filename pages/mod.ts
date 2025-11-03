// Universal Timeline Components
// Export all components and utilities for cross-framework usage

// Types and schemas
export type { 
  TimelineItem, 
  Milestone, 
  StatsData, 
  SiteData, 
  FrameworkType,
  FrameworkAdapter,
  UniversalProps 
} from "./_types/timeline.ts";

export { 
  TimelineItemSchema,
  MilestoneSchema,
  StatsSchema,
  SiteDataSchema 
} from "./_types/timeline.ts";

// Data store
export { TimelineStore, createTimelineStore } from "./_data/timeline-store.ts";

// Framework adapters
export { 
  LumeAdapter,
  FreshAdapter,
  ReactAdapter,
  createLumeAdapter,
  createFreshAdapter,
  createReactAdapter,
  createStyledProps
} from "./_adapters/framework-adapters.ts";

// Components (Lume versions - need adaptation for other frameworks)
export { default as TimelineCard } from "./_components/TimelineCard.tsx";
export { default as Hero } from "./_components/Hero.tsx";
export { default as Sidebar } from "./_components/Sidebar.tsx";
export { default as RightSidebar } from "./_components/RightSidebar.tsx";

// Usage example for Fresh:
/*
import { 
  TimelineCard, 
  createFreshAdapter, 
  createTimelineStore,
  type TimelineItem 
} from "jsr:@yourname/timeline-components";

// Convert Lume component to Fresh
function FreshTimelineCard({ item }: { item: TimelineItem }) {
  const adapter = createFreshAdapter();
  // Manually convert class to className or use adapter utilities
  return <TimelineCard item={item} />;
}
*/