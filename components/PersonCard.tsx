interface PersonCardProps {
  name: string;
  bio: string;
}

export function PersonCard({ name, bio }: PersonCardProps) {
  return (
    <article className="flex flex-col gap-6 sm:flex-row sm:items-start">
      <div
        className="aspect-square w-full max-w-[200px] shrink-0 rounded-xl border border-dashed border-neutral-300 bg-neutral-100"
        aria-hidden="true"
      />
      <div>
        <h3 className="text-xl font-bold tracking-tight text-neutral-900">
          {name}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-neutral-600">{bio}</p>
      </div>
    </article>
  );
}
