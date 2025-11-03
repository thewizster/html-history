import type { TimelineItem } from "../_types/timeline.ts";

interface TimelineCardProps {
  item: TimelineItem;
}

export default function TimelineCard({ item }: TimelineCardProps) {
  return (
    <article class="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          {item.icon ? (
            <img src={item.icon} alt="" class="w-full h-full object-cover" />
          ) : (
            <div class="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold text-xs">
              <span>HTML</span>
            </div>
          )}
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span class="font-semibold text-blue-500">{item.year}</span>
            {item.category && (
              <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded-xl text-xs font-medium">
                {item.category}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div class="mb-4">
        <p class="text-gray-700 leading-relaxed mb-4">{item.desc}</p>
        {item.image && (
          <div class="rounded-lg overflow-hidden mt-4">
            <img src={item.image} alt={item.title} class="w-full h-auto" />
          </div>
        )}
      </div>
      
      <div class="pt-4 border-t border-gray-200">
        <div class="flex gap-4">
          <button type="button" class="flex items-center gap-2 bg-transparent border-none text-gray-500 text-sm cursor-pointer px-2 py-1 rounded-md transition-all duration-200 hover:bg-gray-100 hover:text-blue-500">
            <span>❤️</span>
            <span>42</span>
          </button>
          <button type="button" class="flex items-center gap-2 bg-transparent border-none text-gray-500 text-sm cursor-pointer px-2 py-1 rounded-md transition-all duration-200 hover:bg-gray-100 hover:text-blue-500">
            <span>💬</span>
            <span>8</span>
          </button>
          <button type="button" class="flex items-center gap-2 bg-transparent border-none text-gray-500 text-sm cursor-pointer px-2 py-1 rounded-md transition-all duration-200 hover:bg-gray-100 hover:text-blue-500">
            <span>🔗</span>
          </button>
        </div>
      </div>
    </article>
  );
}