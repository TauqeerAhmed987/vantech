import orbSphere from '../assets/images/orb-sphere.webp';
import moonImg from '../assets/images/moonimg.webp';
import bannerStar from '../assets/images/banner-star.svg';

export default function OrbSphere({
  className,
  star = true,
  spin = false,
  src,
}: {
  className?: string;
  star?: boolean;
  spin?: boolean;
  src?: string;
}) {
  return (
    <div className={`orb-sphere${className ? ` ${className}` : ''}`}>
      <img
        src={src ?? (spin ? moonImg : orbSphere)}
        alt=""
        className={`orb-sphere__img${spin ? ' orb-sphere__img--spin' : ''}`}
        loading="lazy"
      />
      {star && <img src={bannerStar} alt="" className="orb-sphere__star" />}
    </div>
  );
}
