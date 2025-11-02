interface TimelineItem {
  year: number;
  title: string;
  desc: string;
}

export const title = "HTML History Timeline";
export const layout = "layout.tsx";

export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  // Sort timeline data by year
  const timeline = (data.site as { timeline: TimelineItem[] }).timeline;
  const sortedTimeline = timeline.sort((a: TimelineItem, b: TimelineItem) => a.year - b.year);

  return (
    <>
      <h1>{data.title}</h1>
      <div id="feed">
        {sortedTimeline.map((item: TimelineItem) => (
          <div class="card" key={item.year + item.title}>
            <div class="year">{item.year}</div>
            <h3>{item.title}</h3>
            <p class="desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};