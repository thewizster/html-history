import type { Milestone } from "../_types/timeline.ts";

interface SidebarProps {
  milestones: Milestone[];
  title: string;
}

export default function Sidebar({ milestones, title }: SidebarProps) {
  return (
    <div>
      <div class="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-50">{title}</h3>
        <nav class="flex flex-col gap-2">
          {milestones.map((milestone) => (
            <a 
              href={`#${milestone.id}`} 
              class={`flex items-center gap-3 px-3 py-2 rounded-lg text-decoration-none transition-all duration-200 border border-transparent ${
                milestone.isActive 
                  ? 'bg-blue-500 text-white font-medium' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500'
              }`}
              key={milestone.id}
            >
              <span class={`font-semibold text-sm min-w-[40px] ${
                milestone.isActive ? 'text-white' : 'text-blue-500'
              }`}>
                {milestone.year}
              </span>
              <span class="text-sm">{milestone.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}