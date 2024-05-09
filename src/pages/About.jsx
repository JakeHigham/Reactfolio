import React from 'react';
import profilePic from '../media/BroncoStrike.jpg';

function AboutMe() {
  return (
    <section style={{ position: 'relative', padding: '20px' }}>
      <h2>About Me</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={profilePic} alt="Jacob Higham and his platoon" style={{ width: '300px', height: 'auto', borderRadius: '50%', marginRight: '20px' }}/>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '10px' }}>
          <p>Hello and thanks for visiting my portfolio! My name is Jake Higham. Former soldier who served as an Infantryman for the United States Army's 2nd Battalion 35th Infantry Regiment, 25th Infantry Division as a member of Alpha Company's Second Platoon. I was trained and served as a rifleman before being transitioned into the Radio Telephone Operator for my platoon. I also worked as an EMT for five years after receiving my honorable discharge, primarily in Lodi and Stockton, California, currently trying my hand at coding and web development! My hobbies include playing the drums, listening to music, and learning Japanese! まだ学ぶことがたくさんある!</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
