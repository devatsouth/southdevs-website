export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage:
          "url(/images/south-watermark.svg), url(/images/dev-watermark.svg), url(/images/paper-texture.jpg)",
        backgroundSize: "100vh, 100vh, cover",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundPosition: "top left, bottom right, center",
      }}
    />
  );
}
