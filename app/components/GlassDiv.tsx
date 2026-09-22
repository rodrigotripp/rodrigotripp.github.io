export const GlassDiv = ({
  children,
  hover,
}: {
  children: React.ReactNode;
  hover?: boolean;
}) => (
  <div className="wrapper">
    <div className={`liquidGlass-wrapper dock ${hover ? "dock-hover" : ""}`}>
      <div className="liquidGlass-effect" />
      <div className="liquidGlass-tint" />
      <div className="liquidGlass-shine" />
      <div className="liquidGlass-text">
        <div className="dock">{children}</div>
      </div>
    </div>
  </div>
);
