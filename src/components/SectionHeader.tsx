export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-block rounded-full glass px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
        {title.split(" ").map((w, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} className="gradient-text">
              {" "}
              {w}
            </span>
          ) : (
            <span key={i}>{i === 0 ? w : ` ${w}`}</span>
          )
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}
