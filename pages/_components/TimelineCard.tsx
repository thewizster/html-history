interface TimelineItem {
  year: number;
  title: string;
  desc: string;
  icon?: string;
  image?: string;
  category?: string;
}

interface TimelineCardProps {
  item: TimelineItem;
}

export default function TimelineCard({ item }: TimelineCardProps) {
  return (
    <article class="timeline-card">
      <div class="card-header">
        <div class="card-avatar">
          {item.icon ? (
            <img src={item.icon} alt="" class="avatar-icon" />
          ) : (
            <div class="avatar-placeholder">
              <span>HTML</span>
            </div>
          )}
        </div>
        <div class="card-meta">
          <h3 class="card-title">{item.title}</h3>
          <div class="card-date">
            <span class="year">{item.year}</span>
            {item.category && <span class="category">{item.category}</span>}
          </div>
        </div>
      </div>
      
      <div class="card-content">
        <p class="card-description">{item.desc}</p>
        {item.image && (
          <div class="card-image">
            <img src={item.image} alt={item.title} />
          </div>
        )}
      </div>
      
      <div class="card-footer">
        <div class="card-actions">
          <button type="button" class="action-btn">
            <span class="action-icon">❤️</span>
            <span class="action-count">42</span>
          </button>
          <button type="button" class="action-btn">
            <span class="action-icon">💬</span>
            <span class="action-count">8</span>
          </button>
          <button type="button" class="action-btn">
            <span class="action-icon">🔗</span>
          </button>
        </div>
      </div>
    </article>
  );
}