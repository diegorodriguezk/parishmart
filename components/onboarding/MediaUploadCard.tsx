export type MediaUploadCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  badge: string;
};

export function MediaUploadCard({
  eyebrow,
  title,
  description,
  action,
  badge,
}: MediaUploadCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-pm-border bg-white p-5 shadow-pm-soft">
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-pm-muted">{eyebrow}</span>
        <span className="rounded-full bg-pm-soft px-2.5 py-0.5 text-[10px] font-bold text-pm-blue">{badge}</span>
      </div>
      <h4 className="mt-2 text-base font-extrabold text-pm-navy">{title}</h4>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-pm-muted">{description}</p>
      <button
        type="button"
        className="mt-4 inline-flex w-fit items-center gap-2 rounded-xl border border-pm-border bg-white px-4 py-2 text-sm font-bold text-pm-blue transition-colors hover:border-pm-blue hover:bg-pm-soft"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
        {action}
      </button>
    </div>
  );
}
