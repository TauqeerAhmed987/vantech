type IconProps = {
  svg: string;
  className?: string;
};

export default function Icon({ svg, className }: IconProps) {
  return (
    <span
      className={`icon${className ? ` ${className}` : ''}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
