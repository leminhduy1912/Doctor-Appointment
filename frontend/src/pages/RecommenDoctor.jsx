// import React, { useState } from 'react';
// import axios from 'axios';

// const availableSymptoms = [
//   "Fever",
//   "Headache",
//   "Muscle pain",
//   "Cough",
//   "Fatigue",
//   "Sore throat",
//   "Nausea",
//   "Shortness of breath"
// ];

// const SymptomSelector = () => {
//   const [selectedSymptoms, setSelectedSymptoms] = useState([]);

//   const handleSelect = (e) => {
//     const selected = e.target.value;
//     if (selected && !selectedSymptoms.includes(selected)) {
//       const updated = [...selectedSymptoms, selected];
//       setSelectedSymptoms(updated);
//       sendToAPI(updated);
//     }
//     e.target.value = ''; // Reset select
//   };

//   const handleRemove = (symptom) => {
//     const updated = selectedSymptoms.filter(s => s !== symptom);
//     setSelectedSymptoms(updated);
//     sendToAPI(updated);
//   };

//   const sendToAPI = async (symptoms) => {
//     try {
//       const response = await axios.post('http://localhost:8000/recommend-doctors', {
//         symptoms
//       });
//       console.log('Recommended doctors:', response.data);
//     } catch (error) {
//       console.error('API error:', error);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
//       <h2 className="text-2xl font-semibold mb-4">Select your symptoms</h2>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {selectedSymptoms.map((symptom, idx) => (
//           <span key={idx} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
//             {symptom}
//             <button
//               onClick={() => handleRemove(symptom)}
//               className="ml-2 text-blue-500 hover:text-blue-800 font-bold"
//             >
//               ×
//             </button>
//           </span>
//         ))}
//       </div>

//       {/* Dropdown Select */}
//       <select
//         onChange={handleSelect}
//         className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//       >
//         <option value="">-- Select a symptom --</option>
//         {availableSymptoms
//           .filter(symptom => !selectedSymptoms.includes(symptom))
//           .map((symptom, idx) => (
//             <option key={idx} value={symptom}>
//               {symptom}
//             </option>
//           ))}
//       </select>
//     </div>
//   );
// };

// export default SymptomSelector;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const availableSymptoms = [
  "Fever",
  "Cough",
  "Sore throat",
  "Fatigue",
  "Shortness of breath",
  "Chest pain",
  "Headache",
  "Loss of taste or smell",
  "Dizziness",
  "Seizures",
  "Numbness in limbs",
  "Muscle pain",
  "Nausea",
  "Vomiting",
  "Abdominal pain",
  "Indigestion",
  "Constipation",
  "Diarrhea",
  "Skin rash",
  "Itching",
  "Acne",
  "Psoriasis",
  "Dry skin",
  "Eczema",
  "Irregular periods",
  "Pelvic pain",
  "Heavy bleeding",
  "Morning sickness",
  "Breast tenderness",
  "Vaginal discharge",
  "Child growth delay",
  "Runny nose",
  "Frequent infections",
  "Ear pain",
  "Teething issues",
  "Bedwetting"
];

const SymptomSelector = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
const navigate = useNavigate();
  const handleSelect = (e) => {
    const selected = e.target.value;
    if (selected && !selectedSymptoms.includes(selected)) {
      const updated = [...selectedSymptoms, selected];
      setSelectedSymptoms(updated);
      sendToAPI(updated);
    }
    e.target.value = ''; // Reset select
  };

  const handleRemove = (symptom) => {
    const updated = selectedSymptoms.filter(s => s !== symptom);
    setSelectedSymptoms(updated);
    sendToAPI(updated);
  };

  const sendToAPI = async (symptoms) => {
    if (symptoms.length === 0) {
      setDoctors([]);
      setErrorMsg('');
      return;
    }
    try {
      setErrorMsg('');
      const response = await axios.post('http://localhost:8000/recommend-doctors', {
        symptoms
      });
      setDoctors(response.data.recommended_doctors || []);
    } catch (error) {
      setDoctors([]);
      if (error.response && error.response.data && error.response.data.detail === "Insufficient data to make a recommendation.") {
        setErrorMsg("Not enough symptoms to find a suitable doctor, please select additional symptoms that you are experiencing.");
      } else {
        setErrorMsg("An error occurred when calling the API. Please try again later.");
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Select your symptoms</h2>

      {/* Selected Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedSymptoms.map((symptom, idx) => (
          <span key={idx} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {symptom}
            <button
              onClick={() => handleRemove(symptom)}
              className="ml-2 text-blue-500 hover:text-blue-800 font-bold"
              aria-label={`Remove ${symptom}`}
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Dropdown Select */}
      <select
        onChange={handleSelect}
        className="w-full border border-gray-300 rounded-xl p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Select symptom"
      >
        <option value="">-- Select a symptom --</option>
        {availableSymptoms
          .filter(symptom => !selectedSymptoms.includes(symptom))
          .map((symptom, idx) => (
            <option key={idx} value={symptom}>
              {symptom}
            </option>
          ))}
      </select>

      {/* Error message */}
      {errorMsg && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
          {errorMsg}
        </div>
      )}

      {/* Doctor list */}
      {/* {doctors.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Recommended Doctors</h3>
          <ul className="space-y-4">
            {doctors.map((doc, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                 <img
  src={doc.image || 'https://res.cloudinary.com/dolaccvrd/image/upload/v1744611708/v8i0ktcadocx6khckgp1.jpg'}
  alt={doc.name}
  className="w-24 h-24 object-cover rounded-full"
/>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{doc.name}</h4>
                  <p className="text-sm text-gray-600">{doc.specialty}</p>
                 

                  <p className="text-sm text-gray-600">{doc.experience}</p>
                  <p className="text-sm text-gray-600">{doc.about}</p>
                </div>
                <a
                  href={typeof doc.link === 'string' || typeof doc.link === 'number' ? doc.link : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Profile
                </a>
              </li>
            ))}
          </ul>
        </div>
      )} */}


      {doctors.length > 0 && (
  <div className="mt-8">
    <h3 className="text-2xl font-bold mb-6 text-gray-800">Recommended Doctors</h3>
    <ul className="space-y-6">
      {doctors.map((doc, idx) => (
        <li
          key={idx}
          className="flex items-start gap-6 p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
        >
          <img
            src={
              doc.image?.trim()
                ? doc.image
                : 'https://res.cloudinary.com/dolaccvrd/image/upload/v1744611708/v8i0ktcadocx6khckgp1.jpg'
            }
            alt={doc.name}
            className="w-24 h-24 object-cover rounded-full border"
          />

          <div className="flex-1">
            <h4 className="text-xl font-semibold text-gray-900 mb-1">{doc.name}</h4>
            <p className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">Specialty:</span> {doc.specialty || 'N/A'}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">Experience:</span> {doc.experience || 'N/A'}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-medium text-gray-900">About:</span> {doc.about || 'No information provided.'}
            </p>
          </div>

          <div
            //href={typeof doc.link === 'string' || typeof doc.link === 'number' ? doc.link : '#'}
            //target="_blank"
            //rel="noopener noreferrer"
            onClick={()=>{navigate(`/appointment/${doc.id}`)}}
            className="cursor-pointer text-sm text-blue-600 hover:underline font-semibold whitespace-nowrap self-center"
          >
            Book →
          </div>
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
};

export default SymptomSelector;
