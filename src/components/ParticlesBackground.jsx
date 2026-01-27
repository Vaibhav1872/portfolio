import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        fullScreen: { enable: true, zIndex: -1 },
        fpsLimit: 144,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse", // Particles will move away from cursor
                },
                onClick: {
                    enable: true,
                    mode: "push", // Adds more particles on click
                },
            },
            modes: {
                repulse: {
                    distance: 150,
                    duration: 0.4,
                },
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 200,
                    links: { opacity: 0.5 }
                }
            },
        },
        particles: {
            color: { value: "#64ffda" },
            links: {
                color: "#64ffda",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 4, // Fast movement as requested
                direction: "none",
                outModes: { default: "bounce" }
            },
            number: {
                density: { enable: true, area: 800 },
                value: 100
            },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
    };

    return init ? <Particles id="tsparticles" options={options} /> : null;
};
export default ParticlesBackground;