import React from 'react';
import { Timeline, Events, Event } from 'vertical-timeline-component-react';

const customTheme = {
  borderDotColor: '#ffffff',
  descriptionColor: '#d0cdc4',
  dotColor: '#d0cdc4',
  eventColor: '#965500',
  lineColor: '#d0cdc4',
  subtitleColor: '#7c7c7c',
  titleColor: '#405b73',
  yearColor: '#405b73',
};

const ClientsPage = () => {
  return (
    <>
      <Timeline
        lang='en'
        theme={customTheme}
        dateFormat='only-number'
        collapse
        withoutDay
      >
        <Events
          title={<a href='#'>HOPLA.Online</a>}
          startDate='2024/07'
        >
          <Event
            title='Sr. Full Stack Developer'
            description={[
              '🌐 Developed and managed 2 dynamic websites and 1 API backend, dedicated to delivering seamless user experiences.',
              '💻 Proficient in front-end technologies: HTML, CSS, and JS, enabling the creation of visually appealing and intuitive user interfaces.',
              '📡 Skilled in back-end technologies: Node.js and Express, adeptly developing robust server-side logic and RESTful APIs.',
              '🔧 Experienced in version control systems, ensuring efficient collaboration and code management.',
              '🔍 Committed to continuous learning and leveraging technology to strive for excellence in all aspects of development.',
              '🚀 Proficient in transforming Figma designs into polished and fully functional code, ensuring seamless implementation and captivating user experiences.',
              '🔄 Adept at agile development methodologies, collaborating with cross-functional teams to prioritize tasks, adapt quickly to changing requirements, and deliver high-quality solutions with speed and efficiency.',
            ]}
          />
        </Events>
        <Events
          title={<a href='#'>HOPLA.Online</a>}
          startDate='2022/12'
          endDate='2024/07'
          defaultClosed
        >
          <Event
            title='Full Stack Developer'
            description={[
              '🌐 Developed and managed 2 dynamic websites and 1 API backend, dedicated to delivering seamless user experiences.',
              '💻 Proficient in front-end technologies: HTML, CSS, and JS, enabling the creation of visually appealing and intuitive user interfaces.',
              '📡 Skilled in back-end technologies: Node.js and Express, adeptly developing robust server-side logic and RESTful APIs.',
              '🔧 Experienced in version control systems, ensuring efficient collaboration and code management.',
              '🔍 Committed to continuous learning and leveraging technology to strive for excellence in all aspects of development.',
              '🚀 Proficient in transforming Figma designs into polished and fully functional code, ensuring seamless implementation and captivating user experiences.',
              '🔄 Adept at agile development methodologies, collaborating with cross-functional teams to prioritize tasks, adapt quickly to changing requirements, and deliver high-quality solutions with speed and efficiency.',
            ]}
          />
        </Events>
        <Events
          title={<a href='#'>Alsons Aquaculture Corporation</a>}
          startDate='2018/08'
          endDate='2022/12'
          // defaultClosed
        >
          <Event
            title='System Analyst/Programmer'
            description={[
              '💻 Successfully created an Online Ticketing System, enhancing customer experience and optimizing ticket management for increased convenience',
              '📈 Developed an Online Payroll System, resulting in a significant enhancement of the payroll process and substantial time savings.',
              '💽 Proficient in database design, architecting efficient and scalable data structures to optimize system performance and data management.',
              '✨ Proficient in translating complex business requirements into code, bridging the gap between business needs and technical implementation.',
              '📄 Highly skilled in creating comprehensive technical documentation, adeptly capturing intricate system architectures and development processes with meticulous attention to detail.',
            ]}
          />
        </Events>
      </Timeline>
    </>
  );
};

export default ClientsPage;
