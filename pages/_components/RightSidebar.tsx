import type { StatsData } from "../_types/timeline.ts";

interface RightSidebarProps {
  stats: StatsData;
  quickFacts: string[];
}

export default function RightSidebar({ stats, quickFacts }: RightSidebarProps) {
  return (
    <div class="space-y-6">
      {/* Timeline Stats */}
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-50">Timeline Impact</h3>
        <div class="space-y-4">
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-2xl font-bold text-blue-700 leading-none">{stats.totalEntries}</div>
            <div class="text-sm text-gray-600 mt-1">Timeline Entries</div>
          </div>
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-2xl font-bold text-blue-700 leading-none">{stats.yearsSpanned}</div>
            <div class="text-sm text-gray-600 mt-1">Years Covered</div>
          </div>
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-2xl font-bold text-blue-700 leading-none">{stats.majorVersions}</div>
            <div class="text-sm text-gray-600 mt-1">Major Versions</div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-50">Quick Facts</h3>
        <ul class="space-y-3">
          {quickFacts.map((fact, index) => (
            <li key={index} class="flex items-start gap-3 py-3 border-b border-gray-100 last:border-b-0">
              <span class="text-xl flex-shrink-0">💡</span>
              <span class="text-sm text-gray-700 leading-relaxed">{fact}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learning Resources */}
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-50">Learning Resources</h3>
        <div class="space-y-3">
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
            class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-decoration-none text-gray-700 transition-all duration-200 border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500" 
            target="_blank" 
            rel="noopener"
          >
            <span class="text-xl">📚</span>
            <span class="text-sm font-medium">MDN HTML Guide</span>
          </a>
          <a 
            href="https://html.spec.whatwg.org/" 
            class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-decoration-none text-gray-700 transition-all duration-200 border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500" 
            target="_blank" 
            rel="noopener"
          >
            <span class="text-xl">📋</span>
            <span class="text-sm font-medium">HTML Living Standard</span>
          </a>
          <a 
            href="https://validator.w3.org/" 
            class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-decoration-none text-gray-700 transition-all duration-200 border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500" 
            target="_blank" 
            rel="noopener"
          >
            <span class="text-xl">✅</span>
            <span class="text-sm font-medium">HTML Validator</span>
          </a>
        </div>
      </div>
    </div>
  );
}