import { z } from "zod";

// Core timeline schemas
export const TimelineItemSchema = z.object({
  year: z.number(),
  title: z.string(),
  desc: z.string(),
  category: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
});

export const MilestoneSchema = z.object({
  id: z.string(),
  title: z.string(),
  year: z.number(),
  isActive: z.boolean().optional(),
});

export const StatsSchema = z.object({
  totalEntries: z.number(),
  yearsSpanned: z.number(),
  majorVersions: z.number(),
});

export const SiteDataSchema = z.object({
  timeline: z.array(TimelineItemSchema),
  milestones: z.array(MilestoneSchema),
  stats: StatsSchema,
  quickFacts: z.array(z.string()),
});

// Inferred types
export type TimelineItem = z.infer<typeof TimelineItemSchema>;
export type Milestone = z.infer<typeof MilestoneSchema>;
export type StatsData = z.infer<typeof StatsSchema>;
export type SiteData = z.infer<typeof SiteDataSchema>;

// Framework detection type
export type FrameworkType = 'lume' | 'fresh' | 'react';

// Universal component props
export interface UniversalProps {
  framework?: FrameworkType;
  adapter?: FrameworkAdapter;
}

export interface FrameworkAdapter {
  classKey: 'class' | 'className';
  framework: FrameworkType;
  createProps: (classes: string) => Record<string, string>;
}