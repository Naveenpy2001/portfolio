"use client"
import '../css/TimeLine.css'

import { useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa'; 
import SectionBox from './NameComponent';

const Timeline = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
   <>
   <SectionBox title={ "Timeline"} description={ "My professional journey so far"} borderColor={"#2ecc71"}/>
    <div className="timeline-container appeared">
      <div className="timeline-title appeared">
      </div>

      <div className="timeline">
        {/* Current Role */}
        <div className="timeline-item left appeared">
          <div className="timeline-content appeared">
            
            <div className="timeline-date appeared">27/01/2024 – Present</div>
            <h3>Frontend Developer at TSAR-IT Pvt Ltd</h3>
            <p className={expanded ? 'expanded' : 'truncated'}>
              As a Frontend Developer, I specialize in building responsive and user-friendly interfaces using modern technologies like React.js and Next.js. I collaborate with cross-functional teams to integrate APIs and optimize frontend performance. My role also involves ensuring accessibility and improving website performance using tools like Lighthouse.
            </p>
            <p className="view-more appeared" onClick={toggleExpand}>
              {expanded ? 'View Less' : 'View More'}
            </p>
          </div>
        </div>

        {/* Future Role with Icon */}
        <div className="timeline-item right appeared" style={{display:'none'}}>
          <div className="timeline-content appeared">
            <div className="timeline-date appeared">Expected Start: 01/01/2025</div>
            <h3>Senior Frontend Developer</h3>
            <p className={expanded ? 'expanded' : 'truncated'}>
              In my future role as a Senior Frontend Developer, I will lead the frontend team in designing and implementing scalable web applications. I will mentor junior developers, conduct workshops, and drive the adoption of cutting-edge technologies like WebAssembly and PWAs to enhance user experiences.
            </p>
            <p className="view-more appeared" onClick={toggleExpand}>
              {expanded ? 'View Less' : 'View More'}
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Timeline;