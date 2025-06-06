type LinkProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  ariaLabel?: string;
};

export default function Link({
  children,
  className = '',
  href,
  ariaLabel = '',
}: LinkProps) {
  const linkClassName = `text-lg font-normal text-[#111111] hover:text-[#3A6150] ${className}`;

  return (
    <a className={linkClassName} href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
