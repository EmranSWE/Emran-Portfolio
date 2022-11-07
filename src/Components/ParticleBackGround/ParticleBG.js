import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import particleConfig from './Config/particle.config';

const ParticleBG = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);
const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

    return (
        <Particles  id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={particleConfig}
      />
    );
};

export default ParticleBG;