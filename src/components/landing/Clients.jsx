export default function Clients() {
  const logos = [
    { alt: "Samsung", src: "/logos/samsung.svg" },
    { alt: "Motorola", src: "/logos/motorola.svg" },
    { alt: "Xiaomi", src: "/logos/xiaomi.svg" },
    { alt: "Logitech", src: "/logos/logitech.svg" },
    { alt: "Kingston", src: "/logos/kingston.svg" },
  ];

  return (
    <section className="bg-[#1E2A38] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-14">
        <p className="text-center text-sm text-[#D9D9D9]">Trabajamos con marcas líderes</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {logos.map((l, i) => (
            <div key={i} className="flex items-center justify-center">
              <img
                src={l.src}
                alt={l.alt}
                className="h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
