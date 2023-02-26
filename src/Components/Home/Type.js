import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
    return (
        <Typewriter
        options={{
          strings: [
           "Full Stack Web  Developer 💻",
            "Software Engineer ⌨",
            "MERN Stack Developer 💻",
            "Data Analyst 🖥",
            "Data Scientist 🖥",
            "Data Science and Machine learning Enthusiast ||"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
    );
};

export default Type;