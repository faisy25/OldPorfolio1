import { useSelector } from "react-redux";
import Particles from "react-tsparticles";

const Particle = () => {
  const { color } = useSelector((state) => state.colorMode);

  let particleColor;
  let linkColor;

  if (color === "light") {
    particleColor = "#EFFFFD";
    linkColor = "#EFFFFD";
  } else {
    particleColor = "#0E185F";
    linkColor = "#0E185F";
  }

  return (
    <Particles
      id="tsparticles"
      //   init={particlesInit}
      //   loaded={particlesLoaded}
      options={{
        background: {
          //   color: {
          //     value: "#0d47a1"
          //   }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: `${particleColor}`
          },
          links: {
            // color: "#ffffff",
            // distance: 150,
            // enable: true,
            // opacity: 0.5,
            // width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 10
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "star"
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default Particle;
