import Header from "@/components/Header";
import VintageButton from "@/components/VintageButton";
import VintageFrame from "@/components/VintageFrame";
import { clsx } from "clsx";

export default function Home() {
  return (
    <main
      className={clsx('relative', 'min-h-screen', 'w-full', 'bg-[#eae4d9]', 'text-[#34261d]', 'bg-no-repeat', 'bg-cover', 'bg-center', 'overflow-x-hidden', 'flex', 'flex-col', 'justify-between')}
      style={{
        backgroundImage: "url('/hero-desktop-source.png')",
        backgroundPosition: "right center",
      }}
    >
      {/* Decorative Vintage Frame Border with Scalloped Concave Corners */}
      <VintageFrame />

      {/* Top Header Navigation */}
      <Header />

      {/* Main Hero Content Area */}
      <section className={clsx('flex-1', 'w-full', 'max-w-7xl', 'mx-auto', 'px-4', 'sm:px-8', 'md:px-16', 'lg:px-24', 'flex', 'items-center', 'py-4', 'sm:py-6', 'md:py-10', 'z-10')}>
        {/* Wrapper dikasih efek transform scale dan origin kiri */}
        <div className={clsx('max-w-xl', 'lg:max-w-lg', 'xl:max-w-xl', 'flex', 'flex-col', 'items-start', 'text-left', 'pl-0', 'md:pl-0', 'pt-4', 'lg:pt-8', 'transform', 'scale-[0.65]', 'sm:scale-[0.7]', 'md:scale-[0.75]', 'lg:scale-[0.75]', 'origin-left', '-translate-x-0', 'md:-translate-x-3', 'translate-y-2', 'md:translate-y-4')}>
          {/* Main Headline Block */}
          <h1 className={clsx('mb-6', 'lg:mb-8', 'select-none', 'flex', 'flex-col', 'items-start', 'font-bodoni', 'font-black', 'text-5xl', 'sm:text-6xl', 'md:text-7xl', 'lg:text-[5.3rem]', 'xl:text-[6rem]', 'leading-[0.86]', 'tracking-tight', 'uppercase', '[text-shadow:0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#fff]', 'lg:[text-shadow:none]')}>
            {/* Line 1: LOSE THE — S has grunge texture overlay (digeser sedikit ke kanan) */}
            <span className={clsx('transform', 'scale-y-[1.32]', 'origin-left', 'text-[#3e2e23]', 'block', 'translate-x-3', 'md:translate-x-5')}>
              LO
              <span className={clsx('inline-block', 'relative')}>
                S
                {/* 
                  [ PANDUAN MENGUBAH GRUNGE EFFECT ]
                  - Sama seperti W, atur scale, top, left di sini.
                */}
                <img
                  src="/grunge-effect-s.png"
                  alt=""
                  aria-hidden="true"
                  className={clsx('absolute', 'top-[-0.25em]', 'left-[-0.06em]', 'w-full', 'h-full', 'max-w-none', 'object-contain', 'mix-blend-screen', 'invert', 'sepia-[.3]', 'opacity-90', 'pointer-events-none', 'z-10', 'scale-[1.5]')}
                />
              </span>
              <span className={clsx('inline-block', 'relative')}>
                E
                <img
                  src="/grunge-effect-e.png"
                  alt=""
                  aria-hidden="true"
                  className={clsx('absolute', 'top-[0.5em]', 'left-[-0.1em]', 'w-full', 'h-full', 'max-w-none', 'object-contain', 'mix-blend-screen', 'invert', 'sepia-[.3]', 'opacity-90', 'pointer-events-none', 'z-10', 'scale-[2.0]')}
                />
              </span>
              {/* Teks THE dengan gap eksplisit tiap hurufnya */}
              <span className={clsx('ml-2', 'sm:ml-3', 'md:ml-12', 'inline-flex', 'items-baseline', 'gap-[0.08em]')}>
                <span className={clsx('inline-block', 'relative')}>
                  T
                  {/* Efek grunge khusus huruf T */}
                  <img
                    src="/grunge-effect-t.png"
                    alt=""
                    aria-hidden="true"
                    className={clsx('absolute', 'top-[0.15em]', 'left-0', 'w-full', 'h-full', 'max-w-none', 'object-contain', 'mix-blend-screen', 'invert', 'sepia-[.3]', 'opacity-90', 'pointer-events-none', 'z-10', 'scale-[1.8]')}
                  />
                </span>
                <span>H</span>
                <span className={clsx('inline-block', 'relative')}>
                  E
                  <img
                    src="/grunge-effect-e.png"
                    alt=""
                    aria-hidden="true"
                    className={clsx('absolute', 'top-[0.5em]', 'left-[-0.1em]', 'w-full', 'h-full', 'max-w-none', 'object-contain', 'mix-blend-screen', 'invert', 'sepia-[.3]', 'opacity-90', 'pointer-events-none', 'z-10', 'scale-[2.0]')}
                  />
                </span>
              </span>
            </span>

            {/* Line 2: WORLD, — W has grunge texture overlay, rest solid */}
            <div className={clsx('flex', 'items-baseline', 'transform', 'scale-y-[1.32]', 'origin-left', 'mt-3', 'sm:mt-4', 'md:mt-5')}>
              {/* Text W dikembalikan warnanya. Gambar grunge akan di-invert sehingga background putih jadi transparan, dan bercak gelap jadi terang (warna kertas) */}
              <span className={clsx('text-[#3e2e23]', 'inline-block', 'relative')}>
                W
                {/* 
                  [ PANDUAN MENGUBAH GRUNGE EFFECT ]
                  - UKURAN: ubah scale-[1.0] menjadi scale-[1.2] atau lebih untuk memperbesar/memperkecil
                  - POSISI: ubah top-[...] left-[...] menjadi nilai spesifik (contoh: top-[-10px] left-[20px])
                  - BLEND: mix-blend-screen + invert bikin background gambar (putih) tembus pandang, dan bercaknya jadi warna terang (kertas).
                */}
                <img
                  src="/grunge-effect-w.png"
                  alt=""
                  aria-hidden="true"
                  className={clsx('absolute', 'top-[-0.1em]', 'left-[-0.3em]', 'w-full', 'h-full', 'max-w-none', 'object-contain', 'mix-blend-screen', 'invert', 'sepia-[.3]', 'opacity-90', 'pointer-events-none', 'z-10', 'scale-[0.8]')}
                />
              </span>
              <span className={clsx('text-[#3e2e23]', 'inline-block')}>ORLD,</span>
            </div>

            {/* Line 3: for a minute. — f starts under the R of WORLD */}
            <div className={clsx('relative', '-mt-1', 'sm:-mt-2', 'md:-mt-3', 'lg:-mt-4', 'pl-[10rem]', 'sm:pl-[12rem]', 'md:pl-[14rem]', 'lg:pl-[16rem]', 'flex', 'items-baseline', 'z-10', 'transform', '-rotate-[6deg]', 'lowercase', 'tracking-normal', 'whitespace-nowrap')}>
              <span className={clsx('font-dancing-script', 'text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-[4.3rem]', 'xl:text-[4.8rem]', 'font-normal', 'text-[#3e2e23]', 'leading-none', 'flex', 'gap-4', 'md:gap-7')}>
                <span>for</span>
                <span>a</span>
                <span className="relative">
                  minute.
                  <svg
                    className={clsx('absolute', '-bottom-2', 'left-[12.5%]', 'w-[75%]', 'h-[8px]', 'text-[#3e2e23]', 'pointer-events-none', 'overflow-visible')}
                    viewBox="0 0 100 8"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 2 5.5 C 30 2, 70 2, 98 4"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </h1>

          {/* Subtitle / Description Text */}
          <div className={clsx('font-courier', 'text-base', 'sm:text-lg', 'md:text-xl', 'text-[#3b2d24]', 'leading-[1.25]', 'space-y-0', 'mb-8', 'lg:mb-10', 'max-w-md', 'font-medium', 'tracking-normal', '-mt-2', 'md:-mt-4', '[text-shadow:0_0_8px_#fff,0_0_16px_#fff]', 'lg:[text-shadow:none]')}>
            <p>Four flashes. Two printed strips.</p>
            <p>One moment that does not disspeaer</p>
            <p>into your camera roll</p>
          </div>

          {/* Call to Action Button - di-scale balik supaya ukurannya normal sama seperti navbar */}
          <div className={clsx('transform', 'scale-[1.33]', 'origin-left', 'mt-1')}>
            <VintageButton className={clsx('px-7', 'py-3.5', 'text-sm', 'sm:text-base')}>
              see the experience
            </VintageButton>
          </div>
        </div>
      </section>


    </main>
  );
}
