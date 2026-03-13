import { useMediaQuery } from "react-responsive";
import { featureLists, goodLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';

    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5, // true make animation progresses from 0% to 100% without any delay but with numbers they represent seconds of animation time, so 1.5 means the animation will take 1.5 seconds to complete as you scroll through the trigger area.
        pin: true,
      }
    })
    maskedTimeline.to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
    // stagger: 0.2 means that each element with the class "will-fade" will start fading out 0.2 seconds after the previous one starts, creating a cascading effect as they fade out one after another.
    // ease: "power1.inOut" is an easing function that creates a smooth transition for the fade-out effect, making it start slowly, speed up in the middle, and then slow down again towards the end of the animation.
      .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', ease: 'power1.inOut', duration: 1 })
    .to("#masked-content", {opacity: 1, ease: "power1.inOut", duration: 1})
  })
    return (
      <div id="art">
        <div className="container mx-auto h-full pt-20">
          <h2 className="will-fade">The Art</h2>

          <div className="content">
            <ul className="space-y-4 will-fade">
              {goodLists.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src="/images/check.png" alt="check" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>

            <div className="cocktail-img">
              <img
                src="/images/under-img.jpg"
                alt="cocktail"
                className="abs-center masked-img size-full object-contain"
              />
            </div>

            <ul className="space-y-4 will-fade">
              {featureLists.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start gap-2">
                  <img src="/images/check.png" alt="check" />
                  <p className="md:w-fit w-60">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="masked-container">
            <h2 className="will-fade">Sip Worthy Perfection</h2>
            <div id="masked-content">
              <h3>Made with Craft, Poured with Passion</h3>
              <p>This isn't just a drink, It's a carefully crafted made just for you.</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Art;