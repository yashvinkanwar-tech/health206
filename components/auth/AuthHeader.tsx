import Image from "next/image";

type AuthHeaderProps = {
  title: string;
  subtitle: string;
};

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      <Image
        src="/logos/health206-logo.png"
        alt="Health 206"
        width={80}
        height={80}
        className="mx-auto mb-4"
      />

      <h1 className="text-3xl font-bold text-white">
        {title}
      </h1>

      <p className="text-slate-400 mt-2">
        {subtitle}
      </p>
    </div>
  );
}