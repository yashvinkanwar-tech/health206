interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}