import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  showText?: boolean;
  className?: string;
  dark?: boolean;
}

export default function Logo({
  showText = true,
  className = "",
  dark = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-icon.png"
        alt="Leviathan Sellers"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-md object-contain"
        priority
      />
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="text-[#F97316]"
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontWeight: 900,
              fontSize: "1.05rem",
              letterSpacing: "0.5px",
            }}
          >
            LEVIATHAN
          </span>
          <span
            className={dark ? "text-white" : "text-[#0F172A]"}
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontWeight: 900,
              fontSize: "1.0rem",
              letterSpacing: "2px",
            }}
          >
            SELLERS
          </span>
        </div>
      )}
    </div>
  );
}
