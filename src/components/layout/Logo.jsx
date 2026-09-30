import logo from '../../assets/umiya-logo.png';

export default function Logo({ className = '', height = 48 }) {
  return (
    <img
      className={className}
      src={logo}
      alt="Umiya Enterprises"
      width={Math.round(height * 1.468)}
      height={height}
      decoding="async"
    />
  );
}
