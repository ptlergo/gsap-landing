import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';

const Hero = () => {
    const videoRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: '767' });

    useGSAP(() => {
        // create the split texts
        const heroSplit = new SplitText('.title', { type: ' words, chars' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        // modify the chars of the hero text being split
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        // animate the hero text
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        // animate the paragraph text
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            y: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.6,
            delay: 1
        })

        // animate the leafs 
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        }).to('.left-leaf', { y: 200 }, 0).to('.right-leaf', { y: -200 }, 0)

        const startVal = isMobile ? 'top 50%' : 'center 55%';
        const endVal = isMobile ? '110% top' : 'bottom top';

        // animate the video
        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: startVal,
                end: endVal,
                scrub: true,
                pin: true
            },
        });

        videoRef.current.onloadedmetadata = () => {
            videoTimeline.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            })
        };


    }, [])

    return (<><section id="hero" className="noisy">
        <h1 className="title">title</h1>
        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
        <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>cool crisp classic</p>
                    <p className="subtitle">
                        sip the spirit of<br /> summer
                    </p>
                </div>
                <div className="view-cocktails">
                    <p className="subtitle">
                        Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                    </p>
                    <a href="#cocktails"  >
                        View Cocktails
                    </a>
                </div>
            </div>
        </div>
    </section>
        <div className="video absolute inset-0">
            <video src="/videos/output.mp4" muted playsInline preload="auto" ref={videoRef} className="fixed"></video>
        </div>
    </>)
}

export default Hero;