import { z } from "zod";
import { 
  TimelineItem, 
  Milestone, 
  StatsData, 
  SiteData,
  TimelineItemSchema,
  MilestoneSchema,
  StatsSchema,
  SiteDataSchema 
} from "../_types/timeline.ts";

export class TimelineStore {
  private _data: SiteData | null = null;
  private static _instance: TimelineStore;
  
  private constructor() {}
  
  static getInstance(): TimelineStore {
    if (!TimelineStore._instance) {
      TimelineStore._instance = new TimelineStore();
    }
    return TimelineStore._instance;
  }
  
  // Load and validate data
  async loadData(source: SiteData | string): Promise<SiteData> {
    let rawData: unknown;
    
    if (typeof source === 'string') {
      // Load from URL/file
      const response = await fetch(source);
      rawData = await response.json();
    } else {
      // Direct data object
      rawData = source;
    }
    
    // Runtime validation with Zod
    try {
      this._data = SiteDataSchema.parse(rawData);
      return this._data;
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Data validation failed:', error.issues);
        throw new Error(`Invalid data structure: ${error.issues.map((e) => e.message).join(', ')}`);
      }
      throw error;
    }
  }
  
  // Initialize with data (for static usage)
  setData(data: SiteData): void {
    this._data = SiteDataSchema.parse(data);
  }
  
  // Getters with runtime safety
  getTimeline(): TimelineItem[] {
    if (!this._data) {
      throw new Error('Data not loaded. Call loadData() first.');
    }
    return [...this._data.timeline].sort((a, b) => a.year - b.year);
  }
  
  getMilestones(): Milestone[] {
    if (!this._data) {
      throw new Error('Data not loaded. Call loadData() first.');
    }
    return [...this._data.milestones];
  }
  
  getStats(): StatsData {
    if (!this._data) {
      throw new Error('Data not loaded. Call loadData() first.');
    }
    return { ...this._data.stats };
  }
  
  getQuickFacts(): string[] {
    if (!this._data) {
      throw new Error('Data not loaded. Call loadData() first.');
    }
    return [...this._data.quickFacts];
  }
  
  getAllData(): SiteData {
    if (!this._data) {
      throw new Error('Data not loaded. Call loadData() first.');
    }
    return {
      timeline: this.getTimeline(),
      milestones: this.getMilestones(),
      stats: this.getStats(),
      quickFacts: this.getQuickFacts(),
    };
  }
  
  // Utility methods
  getTimelineByYear(year: number): TimelineItem[] {
    return this.getTimeline().filter(item => item.year === year);
  }
  
  getTimelineByCategory(category: string): TimelineItem[] {
    return this.getTimeline().filter(item => item.category === category);
  }
  
  getMilestoneById(id: string): Milestone | undefined {
    return this.getMilestones().find(milestone => milestone.id === id);
  }
  
  // Validation helpers
  validateTimelineItem(item: unknown): TimelineItem {
    return TimelineItemSchema.parse(item);
  }
  
  validateMilestone(milestone: unknown): Milestone {
    return MilestoneSchema.parse(milestone);
  }
  
  validateStats(stats: unknown): StatsData {
    return StatsSchema.parse(stats);
  }
}

// Convenience factory function
export function createTimelineStore(): TimelineStore {
  return TimelineStore.getInstance();
}