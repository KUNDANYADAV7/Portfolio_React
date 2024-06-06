// import React from "react";
// import skills from "./data/skills.json";

// const Skills = () => {
//   return (
//     <>
//       <div className="container skills" id="skills">
//         <h1>SKILLS</h1>
//         <div className="items">
//           {skills.map((data) => {
//             return (
//               <>
//                 <div
//                   className="item"
//                   key={data.id}
//                   data-aos="flip-left"
//                   data-aos-duration="1000"
//                 >
//                   <img src={`/assets/${data.imageSrc}`} alt="" />
//                   <h3>{data.title}</h3>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;

import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {skills.map((data) => (
          <div
            className="col-12 col-sm-6 d-flex justify-content-center"
            key={data.id}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="item">
              <img src={`/assets/${data.imageSrc}`} alt={data.title} />
              <h3>{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
