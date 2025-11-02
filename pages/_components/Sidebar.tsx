interface Milestone {
  id: string;
  title: string;
  year: number;
  isActive?: boolean;
}

interface SidebarProps {
  milestones: Milestone[];
  title: string;
}

export default function Sidebar({ milestones, title }: SidebarProps) {
  return (
    <div class="sidebar">
      <div class="sidebar-card">
        <h3 class="sidebar-title">{title}</h3>
        <nav class="sidebar-nav">
          {milestones.map((milestone) => (
            <a 
              href={`#${milestone.id}`} 
              class={`sidebar-link ${milestone.isActive ? 'active' : ''}`}
              key={milestone.id}
            >
              <span class="milestone-year">{milestone.year}</span>
              <span class="milestone-title">{milestone.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}