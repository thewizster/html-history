import type { FrameworkAdapter, FrameworkType } from "../_types/timeline.ts";

export class LumeAdapter implements FrameworkAdapter {
  readonly classKey = 'class' as const;
  readonly framework: FrameworkType = 'lume';
  
  createProps(classes: string): Record<string, string> {
    return { class: classes };
  }
  
  static instance: LumeAdapter;
  static getInstance(): LumeAdapter {
    if (!LumeAdapter.instance) {
      LumeAdapter.instance = new LumeAdapter();
    }
    return LumeAdapter.instance;
  }
}

export class FreshAdapter implements FrameworkAdapter {
  readonly classKey = 'className' as const;
  readonly framework: FrameworkType = 'fresh';
  
  createProps(classes: string): Record<string, string> {
    return { className: classes };
  }
  
  static instance: FreshAdapter;
  static getInstance(): FreshAdapter {
    if (!FreshAdapter.instance) {
      FreshAdapter.instance = new FreshAdapter();
    }
    return FreshAdapter.instance;
  }
}

export class ReactAdapter implements FrameworkAdapter {
  readonly classKey = 'className' as const;
  readonly framework: FrameworkType = 'react';
  
  createProps(classes: string): Record<string, string> {
    return { className: classes };
  }
  
  static instance: ReactAdapter;
  static getInstance(): ReactAdapter {
    if (!ReactAdapter.instance) {
      ReactAdapter.instance = new ReactAdapter();
    }
    return ReactAdapter.instance;
  }
}

// Auto-detection helper (for Lume environment)
export function createLumeAdapter(): LumeAdapter {
  return LumeAdapter.getInstance();
}

export function createFreshAdapter(): FreshAdapter {
  return FreshAdapter.getInstance();
}

export function createReactAdapter(): ReactAdapter {
  return ReactAdapter.getInstance();
}

// Universal helper for creating styled props
export function createStyledProps(
  classes: string, 
  adapter: FrameworkAdapter
): Record<string, string> {
  return adapter.createProps(classes);
}