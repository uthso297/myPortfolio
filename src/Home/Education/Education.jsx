import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Education = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <section id="education" className="bg-[#111723] py-8 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4] mb-8">Education Qualification</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Software Engineering (Current) */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-teal-400 mb-2">Software Engineering</h3>
            <p className="text-white text-base">
              <strong>Institution:</strong> Daffodil International University
            </p>
            <p className="text-white text-base">
              <strong>Current Semester:</strong> 5th Semester
            </p>
            <p className="text-white text-base">
              <strong>CGPA:</strong> 3.80 (Out of 4)
            </p>
          </div>

          {/* HSC */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-teal-400 mb-2">Higher Secondary Certificate (HSC)</h3>
            <p className="text-white text-base">
              <strong>Institution:</strong> Abdul Kadir Mollah City College
            </p>
            <p className="text-white text-base">
              <strong>GPA:</strong> 5.00 (Out of 5)
            </p>
            <p className="text-white text-base">
              <strong>Year:</strong> 2021
            </p>
          </div>

          {/* SSC */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-teal-400 mb-2">Secondary School Certificate (SSC)</h3>
            <p className="text-white text-base">
              <strong>Institution:</strong> Janata Adarsha Bidyapith
            </p>
            <p className="text-white text-base">
              <strong>GPA:</strong> 5.00 (Out of 5)
            </p>
            <p className="text-white text-base">
              <strong>Year:</strong> 2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
