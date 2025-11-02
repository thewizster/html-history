interface StatsData {
  totalEntries: number;
  yearsSpanned: number;
  majorVersions: number;
}

interface RightSidebarProps {
  stats: StatsData;
  quickFacts: string[];
}

export default function RightSidebar({ stats, quickFacts }: RightSidebarProps) {
  return (
    <div class="right-sidebar">
      {/* Timeline Stats */}
      <div class="sidebar-card stats-card">
        <h3 class="card-title">Timeline Impact</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">{stats.totalEntries}</div>
            <div class="stat-label">Timeline Entries</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{stats.yearsSpanned}</div>
            <div class="stat-label">Years Covered</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{stats.majorVersions}</div>
            <div class="stat-label">Major Versions</div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div class="sidebar-card facts-card">
        <h3 class="card-title">Quick Facts</h3>
        <ul class="facts-list">
          {quickFacts.map((fact, index) => (
            <li key={index} class="fact-item">
              <span class="fact-icon">💡</span>
              <span class="fact-text">{fact}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learning Resources */}
      <div class="sidebar-card resources-card">
        <h3 class="card-title">Learning Resources</h3>
        <div class="resource-links">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" class="resource-link" target="_blank" rel="noopener">
            <span class="resource-icon">📚</span>
            <span class="resource-text">MDN HTML Guide</span>
          </a>
          <a href="https://html.spec.whatwg.org/" class="resource-link" target="_blank" rel="noopener">
            <span class="resource-icon">📋</span>
            <span class="resource-text">HTML Living Standard</span>
          </a>
          <a href="https://validator.w3.org/" class="resource-link" target="_blank" rel="noopener">
            <span class="resource-icon">✅</span>
            <span class="resource-text">HTML Validator</span>
          </a>
        </div>
      </div>
    </div>
  );
}