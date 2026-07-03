export const brandAccent = "#d06c32";
export const brandBackground = "#f3efe8";
export const brandForeground = "#161d22";

export function BrandTriangle({
  size,
}: {
  size: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="96" height="96" rx="22" fill={brandAccent} />
      <path d="M48 24L72 68H24L48 24Z" fill="white" />
    </svg>
  );
}

export function SocialPreviewFrame({
  eyebrow,
  subtitle,
  title,
}: {
  eyebrow: string;
  subtitle: string;
  title: string;
}) {
  return (
    <div
      style={{
        background: brandBackground,
        color: brandForeground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "56px 64px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "20px",
        }}
      >
        <BrandTriangle size={84} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700 }}>BauPilot by Kairos</div>
          <div
            style={{
              color: "#6b736f",
              fontSize: 18,
              letterSpacing: 1.8,
              textTransform: "uppercase",
            }}
          >
            Cyprus contractor operations
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "880px",
        }}
      >
        <div
          style={{
            color: brandAccent,
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.04,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#58615d",
            fontSize: 28,
            lineHeight: 1.35,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
