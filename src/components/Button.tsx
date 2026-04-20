type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  ariaLabel?: string;
  tabIndex?: number;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  type = "button",
  disabled = false,
  className = "",
  target,
  rel,
  ariaLabel,
  tabIndex,
  ...props
}) => {
  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={className}
        onClick={disabled ? undefined : onClick}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : tabIndex}
        style={disabled ? { pointerEvents: "none", opacity: 0.6 } : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
