// ToDo
// - Update props etc.

export function Logomark(...props: any) {
  return (
    <div style={{ width: "60px", height: "60px" }} {...props}>
      <img
        src="/logo/brand-symbol.svg"
        alt="Logo značky"
        width="60"
        height="60"
      />
    </div>
  );
}

export function Logo({
  background = "light",
  ...props
}: {
  background?: "light" | "dark";
  [x: string]: any;
}) {
  return (
    <div style={{ width: "160px", height: "36px" }} {...props}>
      {background === "light" ? (
        <img
          src="/logo/brand-logo-light-bg.svg"
          alt="Logo značky"
          width="160"
          height="36"
        />
      ) : (
        <img
          src="/logo/brand-logo-dark-bg.svg"
          alt="Logo značky"
          width="160"
          height="36"
        />
      )}
    </div>
  );
}
