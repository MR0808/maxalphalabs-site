interface TimelineItem {
  step: string;
  description: string;
}

interface TimelineProps {
  items: readonly TimelineItem[] | TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <li
          key={item.step}
          className="relative rounded-xl border border-neutral-200 bg-white p-6"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-[#8a7020]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-neutral-900">
            {item.step}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
