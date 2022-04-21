import React, { useState } from "react";
import axios from "axios";
const StuRegistation = () => {
  const [inputdata, setinputdata] = useState({
    stuname: "",
    roll: "",
    imgurl: "",
    session: "",
    semester: "1st Semester",
    techno: "Civil",
    gender: "Male",
    shift: "1st",
    gpa: 0,
    cgpa: "",
  });
  console.log("stuname=>",inputdata.stuname)
  const [click, setClick] = useState(false);
  const [test, settest] = useState(false);
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

  const handelinputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setinputdata({ ...inputdata, [name]: value });
  };

  const gpaHandler = (i) => {
    if (i === "8th Semester") {
      setClick(true);
      setinputdata({ ...inputdata, semester: i });
    }
    if (i !== "8th Semester") {
      setClick(false);
      setinputdata({ ...inputdata, semester: i });
    }

    console.log("index", i);
  };

  const submit = () => {
    if (
      inputdata.stuname &&
      inputdata.imgurl &&
      inputdata.roll &&
      inputdata.gpa &&
      inputdata.session
    ) {
      const data = {
        stuname: inputdata.stuname,
        roll: inputdata.roll,
        session: inputdata.session,
        semester: inputdata.semester,
        techno: inputdata.techno,
        gender: inputdata.gender,
        shift: inputdata.shift,
        imgurl: inputdata.imgurl,
        point: [inputdata.gpa, inputdata.cgpa],
      };
      setinputdata({ ...inputdata, cgpa: null });
      console.log("data=>",data);
      console.log("this is cgpa", inputdata.cgpa);
      axios.post("http://localhost:3002/api/postRegist", data);
      setinputdata({
        stuname: "",
        roll: "", 
        imgurl: "",
        session: "",
        semester: "1st Semester",
        techno: "Civil",
        gender: "Male",
        shift: "1st",
        gpa: 0,
        cgpa: "",
      });
      alert("Thanks for contacting us! We will be in touch with you shortly.");
      settest(false);
    } else {
      alert("You can't leave this field blank");
      settest(!test);
    } 
  };

  return (
    <>
      <div className="container border-[1px] border-[#6db700] bg-gradient-to-t from-[#ededed] to-[#fefefe] rounded-[5px] max-w-[90%] md:max-w-[80%] m-[30px_auto]">
        <div className="regcontain p-[20px]">
          <div className="title bg-[#6db700] p-[10px] rounded-[5px_5px_0px_0px] text-center text-[white]">
            <p>শিক্ষার্থীর তথ্য সংগ্রহ ফরম</p>
          </div>
          <div className="from grid grid-cols-1 md:grid-cols-3">
            <div className="inputform col-span-2">
              <div className="stuname p-[10px_0px]">
                <p className="mb-[5px] font-semibold text-[#333]">
                  Student Name
                </p>
                <input
                  className={
                    test
                      ? "border-[2px] border-[#f10f0f] w-full p-[5px]"
                      : "border-[1px] border-[#d3d1d1] w-full p-[5px]"
                  }
                  name="stuname"
                  value={inputdata.stuname}
                  type="text"
                  onChange={handelinputs}
                />
              </div>
              <div className="sturoll p-[10px_0px]">
                <p className="mb-[5px] font-semibold text-[#333]">Roll</p>
                <input
                  className={
                    test
                      ? "border-[2px] border-[#f10f0f] w-full p-[5px]"
                      : "border-[1px] border-[#d3d1d1] w-full p-[5px]"
                  }
                  name="roll"
                  value={inputdata.roll}
                  type="number"
                  onChange={handelinputs}
                />
              </div>
              <div className="stusession p-[8px_0px]">
                <p className="mb-[5px] font-semibold text-[#333]">Session</p>
                <input
                  className={
                    test
                      ? "border-[2px] border-[#f10f0f] w-full p-[5px]"
                      : "border-[1px] border-[#d3d1d1] w-full p-[5px]"
                  }
                  name="session"
                  value={inputdata.session}
                  type="text"
                  onChange={handelinputs}
                />
              </div>
              <div className="stusemester p-[8px_0px]">
                <p className="mb-[5px] font-semibold text-[#333]">Semester</p>
                <select
                  className="border-[1px] border-[#d3d1d1] w-full p-[5px] "
                  name="semester"
                  value={inputdata.semester}
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
                  className="border-[1px] border-[#d3d1d1] w-full p-[5px] "
                  name="techno"
                  value={inputdata.techno}
                  onChange={handelinputs}
                >
                  {technology.map((a) => {
                    return <option>{a}</option>;
                  })}
                </select>
              </div>
              <div className="stugend p-[8px_0px]">
                <p className="mb-[5px] font-semibold text-[#333]">Gender</p>
                <select
                  className="border-[1px] border-[#d3d1d1] w-full p-[5px] "
                  name="gender"
                  value={inputdata.gender}
                  onChange={handelinputs}
                >
                  {sgender.map((x) => {
                    return <option>{x}</option>;
                  })}
                </select>
              </div>
              <div className="stushift p-[8px_0px]">
                <p className="mb-[5px] font-semibold text-[#333]">Shift</p>
                <select
                  className="border-[1px] border-[#d3d1d1] w-full p-[5px] "
                  name="shift"
                  value={inputdata.shift}
                  onChange={handelinputs}
                >
                  {sshift.map((c) => {
                    return <option>{c}</option>;
                  })}
                </select>
              </div>
              <div className="gpa p-[10px_0px]">
                <p className="mb-[5px] font-semibold text-[#333]">GPA</p>
                <input
                  className={
                    test
                      ? "border-[2px] border-[#f10f0f] w-full p-[5px]"
                      : "border-[1px] border-[#d3d1d1] w-full p-[5px]"
                  }
                  name="gpa"
                  value={inputdata.gpa}
                  type="number"
                  onChange={handelinputs}
                />
              </div>
              <div className={click ? "block" : "gpa hidden p-[10px_0px]"}>
                <p className="mb-[5px] font-semibold text-[#333]">CGPA</p>
                <input
                  className={
                    test
                      ? "border-[2px] border-[#f10f0f] w-full p-[5px]"
                      : "border-[1px] border-[#d3d1d1] w-full p-[5px]"
                  }
                  name="cgpa"
                  value={inputdata.cgpa}
                  type="number"
                  onChange={handelinputs}
                />
              </div>
            </div>
            <div className="imgfild md:ml-4">
              <div className="sturoll p-[10px_0px]">
                <p className="mb-[5px] font-semibold text-[#333]">Photo Url</p>
                <input
                  className={
                    test
                      ? "border-[2px] border-[#f10f0f] w-full p-[5px]"
                      : "border-[1px] border-[#d3d1d1] w-full p-[5px]"
                  }
                  name="imgurl"
                  value={inputdata.imgurl}
                  type="text"
                  onChange={handelinputs}
                />
              </div>
              <img src={inputdata.imgurl} />
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
    </>
  );
};

export default StuRegistation;
