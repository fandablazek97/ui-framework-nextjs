// ToDo
// - Update props etc.

export function Logomark(...props: any) {
  return (
    <div style={{ width: "50px", height: "50px" }} {...props}>
      <img src="/logo/logo-mark.svg" alt="Logo značky" width="70" height="76" />
    </div>
  );
}

export function Logo({
  variant = "light-background",
  ...props
}: {
  variant?: "light-background" | "dark-background";
  [x: string]: any;
}) {
  return (
    <div style={{ width: "110px", height: "21px" }} {...props}>
      {variant === "light-background" ? (
        <img
          src="/logo/logo-lb.svg"
          alt="Logo značky"
          width="110"
          height="21"
        />
      ) : (
        <img
          src="/logo/logo-db.svg"
          alt="Logo značky"
          width="110"
          height="21"
        />
      )}
    </div>
  );
}
