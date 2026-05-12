type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="text-sm tracking-[0.2em] text-[#7b1e1e] uppercase">{eyebrow}</p> : null}
      <h2 className="title-section mt-3 text-[#2f2018]">{title}</h2>
      {description ? <p className="mt-4 text-[#5c4033]/80">{description}</p> : null}
    </div>
  );
}
