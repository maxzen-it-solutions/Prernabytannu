import { useEffect, useMemo, useState } from "react";
import { Flame, TimerReset } from "lucide-react";

export default function TrendingFashionSale({
  title = "Trending Fashion Sale",
  subtitle = "Limited-time offers on the hottest styles",
  endTime,
}) {
  // Default: 30 days countdown
  const defaultEnd = useMemo(() => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), []);
  const saleEndsAt = endTime instanceof Date ? endTime : defaultEnd;

  const [{ d, h, m, s, over }, setTime] = useState({ d: "30", h: "00", m: "00", s: "00", over: false });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = saleEndsAt.getTime() - now.getTime();
      if (diff <= 0) {
        setTime({ d: "00", h: "00", m: "00", s: "00", over: true });
        clearInterval(interval);
        return;
      }
      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      setTime({
        d: String(days).padStart(2, "0"),
        h: String(hours).padStart(2, "0"),
        m: String(minutes).padStart(2, "0"),
        s: String(seconds).padStart(2, "0"),
        over: false,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [saleEndsAt]);

  // Demo products
  const products = [
    {
      id: 1,
      title: "Linen Summer Set",
      price: 1499,
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      badge: "-30%",
    },
    {
      id: 2,
      title: "Minimalist Sneakers",
      price: 2599,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
      badge: "Hot",
    },
    {
      id: 3,
      title: "Soft Knit Cardigan",
      price: 1799,
      img: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop",
      badge: "New",
    },
    {
      id: 4,
      title: "Classic Denim Jacket",
      price: 2199,
      img: "https://images.unsplash.com/photo-1548883354-94bcfe321c0f?q=80&w=1200&auto=format&fit=crop",
      badge: "-20%",
    },
    {
      id: 5,
      title: "Athleisure Hoodie",
      price: 1999,
      img: "https://images.unsplash.com/photo-1520975619016-6b7bfa3a4f7e?q=80&w=1200&auto=format&fit=crop",
      badge: "Trend",
    },
    {
      id: 6,
      title: "Vintage Sunnies",
      price: 899,
      img: "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1200&auto=format&fit=crop",
      badge: "-15%",
    },
    {
      id: 7,
      title: "Floral Midi Dress",
      price: 2399,
      img: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1200&auto=format&fit=crop",
      badge: "Bestseller",
    },
    {
      id: 8,
      title: "Everyday Tote",
      price: 1299,
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      badge: "New",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-white to-white" />

      {/* Header + Countdown */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-rose-700 text-xs font-semibold">
              <Flame className="h-4 w-4" /> Hot Right Now
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-gray-600 max-w-xl">{subtitle}</p>
          </div>

          <div className="shrink-0">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-gray-700 mb-2">
                <TimerReset className="h-5 w-5" />
                <span className="text-sm font-medium">Ends in</span>
              </div>
              {over ? (
                <div className="text-center text-lg font-semibold text-rose-600">Sale ended</div>
              ) : (
                <div className="grid grid-flow-col gap-3 auto-cols-max text-center">
                  <TimeBox label="DAYS" value={d} />
                  <TimeBox label="HRS" value={h} />
                  <TimeBox label="MIN" value={m} />
                  <TimeBox label="SEC" value={s} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Cards Marquee */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="overflow-hidden py-6 group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
            {products.map((p) => (
              <ProductCard key={`dup-${p.id}`} product={p} />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee animation keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-[60px] sm:min-w-[72px] rounded-xl bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-3 text-lg sm:text-2xl font-bold tabular-nums shadow">
        {value}
      </div>
      <span className="mt-1 text-[10px] tracking-widest text-gray-500">{label}</span>
    </div>
  );
}

function ProductCard({ product: p }) {
  return (
    <article
      className="group relative w-48 sm:w-56 md:w-64 shrink-0 rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-shadow mx-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
        <img
          src={p.img}
          alt={p.title}
          className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
          loading="lazy"
        />
        {p.badge && (
          <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
            {p.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 font-semibold">{p.title}</h3>
        <p className="mt-1 text-sm text-gray-500">Special online price</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold">₹{p.price}</div>
          <button className="rounded-xl bg-gray-900 text-white px-3 py-1.5 text-sm font-semibold hover:bg-gray-800 active:scale-95">
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}
