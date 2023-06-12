import "./Button.css";

export default function Button({ children, warna, ...props }) {
  return (
    <button {...props} style={{ backgroundColor: warna }}>
      {children}
    </button>
  );
}
