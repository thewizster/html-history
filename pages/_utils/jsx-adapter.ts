import type { FrameworkAdapter } from "../_types/timeline.ts";

// Universal JSX helper that works with both class and className
export function jsx<T extends Record<string, any>>(
  type: string | ((props: any) => any),
  props: T & { adapter?: FrameworkAdapter },
  ...children: any[]
): any {
  const { adapter, ...restProps } = props;
  
  // If no adapter provided, assume Lume (current environment)
  if (!adapter) {
    return { type, props: restProps, children };
  }
  
  // Convert class/className based on framework
  const finalProps = { ...restProps };
  
  if ('class' in finalProps && adapter.classKey === 'className') {
    finalProps.className = finalProps.class;
    delete finalProps.class;
  } else if ('className' in finalProps && adapter.classKey === 'class') {
    finalProps.class = finalProps.className;
    delete finalProps.className;
  }
  
  return { type, props: finalProps, children };
}

// Simple prop converter for existing components
export function adaptProps<T extends Record<string, any>>(
  props: T,
  adapter?: FrameworkAdapter
): T {
  if (!adapter) return props;
  
  const adapted = { ...props };
  
  if ('class' in adapted && adapter.classKey === 'className') {
    // @ts-ignore - we know this is safe
    adapted.className = adapted.class;
    delete adapted.class;
  } else if ('className' in adapted && adapter.classKey === 'class') {
    // @ts-ignore - we know this is safe  
    adapted.class = adapted.className;
    delete adapted.className;
  }
  
  return adapted;
}