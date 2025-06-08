import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const trigger = document.querySelector("[data-parallax-layers]") as HTMLElement;
    if (!trigger) return;

    const layers = [
      { layer: 1, yPercent: 70 },
      { layer: 2, yPercent: 55 },
      { layer: 3, yPercent: 40 },
      { layer: 4, yPercent: 10 },
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0,
      },
    });

    layers.forEach((l, i) => {
      const el = trigger.querySelector(`[data-parallax-layer="${l.layer}"]`);
      if (el) {
        tl.to(el, { yPercent: l.yPercent, ease: "none" }, i === 0 ? undefined : "<");
      }
    });
  }, []);

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-[120%] w-full" data-parallax-layers>
        <img
          data-parallax-layer="1"
          src="https://cdn.discordapp.com/attachments/1194304311149203476/1287419435170402469/20_20240922212247.jpg?ex=682d3988&is=682be808&hm=704ce5be9bbbeb59963969a7f42afdd3d1c07136a28846d3d33cf2f22117a131&"
          // src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp"
          className="absolute w-full h-auto top-[-17.5%] object-cover pointer-events-none"
          alt=""
        />
        <img 
          data-parallax-layer="2"
          src="https://media.discordapp.net/attachments/1194304311149203476/1305174905913999381/19_20241110211145.png?ex=682d381a&is=682be69a&hm=ae71e22f8417a75920c7a0b5edbde5819d57c34cc1fbbaa9f8470b073dc4669d&=&format=webp&quality=lossless&width=636&height=900"
          // src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
          className="absolute w-full h-auto top-[-17.5%] object-cover pointer-events-none"
          alt=""
        />
        <div
          data-parallax-layer="3"
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-[11vw] font-extrabold font-['PP Neue Corp Wide','sans-serif']">
            Aurelia
          </h1>
        </div>
        <img
          data-parallax-layer="4"
          // src="Key_visual_fN_png.png"
          src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
          className="absolute w-full h-auto top-[-17.5%] object-cover pointer-events-none"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 w-full h-20 from-black to-transparent bg-gradient-to-t pointer-events-none"></div>
      
    </section>
  
  );
};

export default Header;
