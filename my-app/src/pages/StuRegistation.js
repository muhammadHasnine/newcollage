import React, { useState } from "react";
import axios from "axios";
const StuRegistation = () => {
  const [stuname, setstuname] = useState("");
  const [roll, setroll] = useState('');
  const [session, setsession] = useState("");
  const [semester, setsemester] = useState("1st Semester");
  const [techno, settechno] = useState("Civil");
  const [gender, setgender] = useState("Male");
  const [shift, setshift] = useState("1st");
  const [gpa, setgpa] = useState(0);
  const [cgpa, setcgpa] = useState("");
  const [click, setClick] = useState(false);
  const technology = [
    "Civil",
    "Electrical",
    "Mechanical",
    "Power",
    "Electronics",
    "Computer",
    "ENVT",
    "IPCT",
    "Automobile",
    "RAC",
  ];
  const ssemester = [
    "1st Semester",
    "2nd Semester",
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
    "8th Semester",
  ];
  const sgender = ["Male", "Female"];
  const sshift = ["1st", "2nd"];
  const submit = () => {
    const data = {
      stuname,
      roll,
      session,
      semester,
      techno,
      gender,
      shift,
      point:[
        gpa,
        cgpa
      ]
    };
    setcgpa(null)
    console.log(data);
    console.log('this is cgpa',cgpa)
    axios.post("http://localhost:3002/api/postRegist", data);
    alert("Thanks for contacting us! We will be in touch with you shortly.");
  };

  const gpaHandler = (i) => {
    if (i === "8th Semester") {
      setClick(true);
      setsemester(i)
    }
    if (i !== "8th Semester") {
      setClick(false);
      setsemester(i)
    }

    console.log("index", i);
  };
  return (
    <>
      <div className="container border-[1px] border-[#6db700] bg-gradient-to-t from-[#ededed] to-[#fefefe] rounded-[5px] max-w-[90%] md:max-w-[80%] m-[30px_auto]">
        <div className="regcontain p-[20px] ]">
          <div className="title bg-[#6db700] p-[10px] rounded-[5px_5px_0px_0px] text-center text-[white]">
            <p>শিক্ষার্থীর তথ্য সংগ্রহ ফরম</p>
          </div>
          <div className="from">
            <div className="stuname p-[10px_0px]">
              <p className="mb-[5px] font-semibold text-[#333]">Student Name</p>
              <input
                className="border-[1px] border-[#d3d1d1] w-[60%] p-[5px]"
                type="text"
                onChange={(e) => setstuname(e.target.value)}
              />
            </div>
            <div className="sturoll p-[10px_0px]">
              <p className="mb-[5px] font-semibold text-[#333]">Roll</p>
              <input
                className="border-[1px] border-[#d3d1d1] w-[60%] p-[5px]"
                type="number"
                onChange={(e) => setroll(e.target.value)}
              />
            </div>
            <div className="stusession p-[8px_0px]">
              <p className="mb-[5px] font-semibold text-[#333]">Session</p>
              <input
                className="border-[1px] border-[#d3d1d1] w-[60%] p-[5px]"
                type="text"
                onChange={(e) => setsession(e.target.value)}
              />
            </div>
            <div className="stusemester p-[8px_0px]">
              <p className="mb-[5px] font-semibold text-[#333]">Semester</p>
              <select
                className="border-[1px] border-[#d3d1d1] w-[60%] p-[5px] "
                onChange={(e) => gpaHandler(e.target.value)}
              >
                {ssemester.map((s, index) => {
                  return <option>{s}</option>;
                })}
              </select>
            </div>
            <div className="stutech p-[8px_0px]">
              <p className="mb-[5px] font-semibold text-[#333]">Technology</p>
              <select
                className="border-[1px] border-[#d3d1d1] w-[60%] p-[5px] "
                onClick={(e) => settechno(e.target.value)}
              >
                {technology.map((a) => {
                  return <option>{a}</option>;
                })}
              </select>
            </div>

            <div className="stugend p-[8px_0px]">
              <p className="mb-[5px] font-semibold text-[#333]">Gender</p>
              <select
                className="border-[1px] border-[#d3d1d1] w-[60%] p-[5px] "
                onClick={(e) => setgender(e.target.value)}
              >
                {sgender.map((x) => {
                  return <option>{x}</option>;
                })}
              </select>
            </div>
            <div className="stushift p-[8px_0px]">
              <p className="mb-[5px] font-semibold text-[#333]">Shift</p>
              <select
                className="border-[1px] border-[#d3d1d1] w-[60%] p-[5px] "
                onClick={(e) => setshift(e.target.value)}
              >
                {sshift.map((c) => {
                  return <option>{c}</option>;
                })}
              </select>

              <div className="gpa p-[10px_0px]">
                <p className="mb-[5px] font-semibold text-[#333]">gpa</p>
                <input
                  className="border-[1px] border-[#d3d1d1] w-[60%] p-[5px]"
                  type="number"
                  onChange={(e) => setgpa(e.target.value)}
                />
              </div>
              <div className={click ? "block" : "gpa hidden p-[10px_0px]"}>
                <p className="mb-[5px] font-semibold text-[#333]">cgpa</p>
                <input
                  className="border-[1px] border-[#d3d1d1] w-[60%] p-[5px]"
                  type="number"
                  onChange={(e) => setcgpa(e.target.value)}
                />
              </div>
            </div>
            <button
              className="p-[10px_15px] border-[1px] border-[#cfcccc] m-[10px_0px] font-semibold text-[#333]"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StuRegistation;
