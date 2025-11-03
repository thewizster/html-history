# Universal Component Pattern Documentation

This document describes the **Universal Component Pattern** implemented in this project, enabling TSX components to work seamlessly across multiple frameworks (Lume, Fresh, React, etc.) with minimal adaptation.

## 🎯 **Overview**

The Universal Component Pattern provides:
- **Runtime Type Safety** with Zod validation
- **Framework-Agnostic Data Layer** that works identically across frameworks
- **Minimal Migration Effort** (90% code reuse between frameworks)
- **Zero Build Complexity** using modern ESM imports and JSR packages

## 📁 **Architecture**

```
pages/
├── _types/                   # Universal type definitions
│   └── timeline.ts          # Zod schemas + TypeScript types
├── _adapters/               # Framework adapters (future use)
│   └── framework-adapters.ts # Lume/Fresh/React adapters
├── _data/                   # Universal data layer
│   ├── timeline-store.ts    # Validated data store
│   └── site.ts             # Data with Zod validation
├── _components/             # Components (currently Lume-specific)
│   ├── TimelineCard.tsx
│   ├── Hero.tsx
│   ├── Sidebar.tsx
│   └── RightSidebar.tsx
└── mod.ts                   # Export module for reuse
```

## 🔧 **Core Components**

### **1. Universal Types (`_types/timeline.ts`)**

**Purpose**: Defines schemas and types that work across all frameworks.

```typescript
import { z } from "zod";

// Zod schemas provide runtime validation
export const TimelineItemSchema = z.object({
  year: z.number(),
  title: z.string(),
  desc: z.string(),
  category: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
});

// TypeScript types inferred from schemas
export type TimelineItem = z.infer<typeof TimelineItemSchema>;

// Framework detection
export type FrameworkType = 'lume' | 'fresh' | 'react';
```

**Benefits**:
- ✅ **Runtime Validation**: Catches data errors at runtime
- ✅ **Compile-time Safety**: Full TypeScript support
- ✅ **Framework Agnostic**: Same types work everywhere

### **2. Universal Data Store (`_data/timeline-store.ts`)**

**Purpose**: Singleton data store with validation that works identically across frameworks.

```typescript
import { TimelineStore, createTimelineStore } from "../_data/timeline-store.ts";

// Usage (identical in all frameworks)
const store = createTimelineStore();
store.setData(rawData);           // Validates with Zod
const timeline = store.getTimeline();  // Returns sorted, validated data
const stats = store.getStats();        // Type-safe data access
```

**Key Features**:
- ✅ **Singleton Pattern**: One instance per application
- ✅ **Runtime Validation**: All data validated with Zod schemas
- ✅ **Utility Methods**: Sorting, filtering, data access helpers
- ✅ **Error Handling**: Clear validation error messages

### **3. Framework Adapters (`_adapters/framework-adapters.ts`)**

**Purpose**: Handle framework-specific differences (class vs className, etc.).

```typescript
// Lume
const lumeAdapter = createLumeAdapter();
lumeAdapter.createProps("bg-white rounded-xl");  // { class: "..." }

// Fresh/React  
const freshAdapter = createFreshAdapter();
freshAdapter.createProps("bg-white rounded-xl");  // { className: "..." }
```

**Current State**: 
- ✅ Implemented for future use
- ⚠️ Components still use direct `class` attributes (Lume-specific)
- 🔄 Ready for full adapter integration

## 🚀 **Migration Guide**

### **Migrating to Fresh**

**Step 1: Copy Universal Files**
```bash
# Copy these files to your Fresh project
cp -r pages/_types/ fresh-project/components/
cp -r pages/_data/ fresh-project/lib/
cp pages/mod.ts fresh-project/lib/timeline-components.ts
```

**Step 2: Convert Components**
The main change is `class` → `className`:

```tsx
// BEFORE (Lume)
<div class="bg-white rounded-xl p-6">
  <h3 class="text-lg font-semibold">{item.title}</h3>
</div>

// AFTER (Fresh)  
<div className="bg-white rounded-xl p-6">
  <h3 className="text-lg font-semibold">{item.title}</h3>
</div>
```

**Step 3: Use Universal Data Store**
```tsx
// fresh-project/routes/timeline.tsx
import { createTimelineStore } from "../lib/timeline-components.ts";

export default function TimelinePage() {
  const store = createTimelineStore();
  store.setData(timelineData);  // Same validation
  const timeline = store.getTimeline();  // Same data access
  
  return (
    <div className="max-w-7xl mx-auto">
      {timeline.map(item => <TimelineCard key={item.year} item={item} />)}
    </div>
  );
}
```

### **Migrating to React**

**Conversion Steps**:
1. Copy `_types/` and `_data/` directories  
2. Convert `class` → `className` in all components
3. Add React imports where needed
4. Update build configuration for Tailwind CSS

**Example Component Conversion**:
```tsx
// timeline-components/TimelineCard.tsx (React version)
import React from 'react';
import type { TimelineItem } from '../types/timeline.ts';

interface TimelineCardProps {
  item: TimelineItem;
}

export function TimelineCard({ item }: TimelineCardProps) {
  return (
    <article className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">{item.desc}</p>
      </div>
    </article>
  );
}
```

## 📦 **Reusable Package Creation**

### **Option 1: JSR Package**

```json
// deno.json for component library
{
  "name": "@yourname/timeline-components", 
  "version": "1.0.0",
  "exports": "./mod.ts",
  "imports": {
    "zod": "jsr:@zod/zod@^4.1.12"
  }
}
```

**Publish**:
```bash
deno publish
```

**Usage in Other Projects**:
```typescript
import { 
  createTimelineStore,
  TimelineCard,
  type TimelineItem 
} from "jsr:@yourname/timeline-components@1.0.0";
```

### **Option 2: Git Submodule**

```bash
# In target project
git submodule add https://github.com/yourname/timeline-components.git lib/timeline-components

# Import from submodule
import { createTimelineStore } from "./lib/timeline-components/mod.ts";
```

## 🔍 **Current Implementation Status**

### **✅ Completed**
- [x] Zod integration with JSR (`jsr:@zod/zod@^4.1.12`)
- [x] Universal type definitions with runtime validation
- [x] TimelineStore with data management and validation
- [x] Framework adapter infrastructure
- [x] Export module for reuse (`mod.ts`)
- [x] All components use universal types

### **🔄 Ready for Enhancement**
- [ ] Full adapter integration in components (currently prepared but not implemented)
- [ ] Framework-specific component versions
- [ ] Automated conversion tools
- [ ] Additional framework adapters (Vue, Svelte, etc.)

### **⚠️ Framework-Specific Elements**
- **Lume-specific**: Components use `class` instead of `className`
- **Data Access**: Uses `data.site` pattern (Lume convention)
- **Layout System**: Uses Lume's layout approach

## 🎨 **Design Philosophy**

### **Principles**
1. **Write Once, Use Everywhere**: Minimal code changes between frameworks
2. **Runtime Safety**: Zod validation catches errors early
3. **Zero Build Complexity**: No complex toolchain required
4. **Modern TypeScript**: Leverages latest language features
5. **Framework Agnostic**: Core logic independent of UI framework

### **Trade-offs**
- **Slight Runtime Overhead**: Zod validation adds minimal performance cost
- **Learning Curve**: Developers need to understand the adapter pattern
- **Framework Specifics**: Some manual conversion still required

## 🛠️ **Development Guidelines**

### **Adding New Components**
1. Define types in `_types/timeline.ts` with Zod schemas
2. Create component with universal TypeScript interfaces
3. Use `class` for Lume compatibility (convert to `className` for other frameworks)
4. Add to `mod.ts` exports
5. Document framework-specific adaptations needed

### **Extending to New Frameworks**
1. Create adapter in `_adapters/framework-adapters.ts`
2. Implement framework-specific `createProps` method
3. Create conversion guide in this document
4. Test data store compatibility
5. Create example component conversions

### **Best Practices**
- ✅ Always validate data with Zod schemas
- ✅ Use singleton pattern for stores
- ✅ Keep business logic in universal modules
- ✅ Document framework-specific requirements
- ✅ Test across target frameworks

## 📚 **Learning Resources**

- [Zod Documentation](https://zod.dev/) - Runtime validation
- [JSR Registry](https://jsr.io/) - Modern TypeScript package distribution
- [Fresh Documentation](https://fresh.deno.dev/) - Deno web framework
- [Lume Documentation](https://lume.land/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 🤝 **Contributing**

When contributing to the universal pattern:

1. **Maintain Compatibility**: Ensure changes work across all target frameworks
2. **Add Validation**: Use Zod schemas for new data structures
3. **Document Changes**: Update this file with any new patterns or breaking changes
4. **Test Thoroughly**: Verify functionality in Lume and test conversion to other frameworks
5. **Follow Patterns**: Use established adapter and store patterns

## 🔮 **Future Roadmap**

### **Phase 1: Enhanced Adapters**
- Full adapter integration in all components
- Automated `class`/`className` conversion
- Framework detection utilities

### **Phase 2: Additional Frameworks**
- Vue.js adapter and component examples
- Svelte adapter and component examples
- Angular adapter (if requested)

### **Phase 3: Developer Tools**
- CLI tool for framework conversion
- VS Code extension for universal components
- Automated testing across frameworks

---

**This Universal Component Pattern enables true write-once, use-everywhere React-style components with modern TypeScript and runtime validation. The foundation is complete and ready for expansion to any framework ecosystem.**