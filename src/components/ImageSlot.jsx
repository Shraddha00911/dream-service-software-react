// Shows a real image if a file named "<name>.(png|jpg|jpeg|svg|webp|gif)" exists in
// src/assets/images/, otherwise shows a dashed placeholder box with the slot name.
//
// Example: <ImageSlot name="logo" alt="Dream Service Software" />
//          → drop src/assets/images/logo.png and it appears automatically.

const files = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg,webp,gif}", {
  eager: true,
  import: "default",
});

const byName = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split("/").pop().replace(/\.[^.]+$/, ""),
    url,
  ])
);

export default function ImageSlot({ name, alt = "", label, className = "", style }) {
  const src = byName[name];

  if (src) {
    return <img className={`img-slot ${className}`} src={src} alt={alt} style={style} />;
  }

  return (
    <div
      className={`img-slot img-slot--placeholder ${className}`}
      style={style}
      role="img"
      aria-label={alt || name}
      title={`Add src/assets/images/${name}.png`}
    >
      {label || name}
    </div>
  );
}
