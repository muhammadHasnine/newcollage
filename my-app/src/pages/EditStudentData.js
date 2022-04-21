import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const EditStudentData = () => {
  const [inputdata, setinputdata] = useState({
    name: "",
    session: "",
    semester: "",
    gender: "",
    shift: "",
    roll: "",
    imgurl: "",
  });
  const [invildColor, setinvildColor] = useState(false);

  const handelinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name,value)

    setinputdata({ ...inputdata, [name]: value });
  };

  // const [name, setname] = useState("");
  // const [session, setsession] = useState("");
  // const [semester, setsemester] = useState("");
  // const [gender, setgender] = useState("");
  // const [shift, setshift] = useState("");
  // const [roll, setroll] = useState('');
  // const [imgurl, setimgurl] = useState('');
  const { id } = useParams();
  const [studata, setstudata] = useState([]);
  // console.log("namedata",name)

  useEffect(() => {
    axios.get("http://localhost:3002/api/read").then((resposn) => {
      //     console.log(resposn.data[0])
      // const postdata =resposn.data[0]
      // setname(postdata.studentName)
      setstudata(resposn.data);
    });
  }, []);

  const newarray = studata.filter((s) => s._id === id);
  console.log("newarray", newarray);
  //     setname(newarray.studentName)
  // const datas = newarray[0]
  // console.log("datas",datas)
  // useEffect(()=>{
  //     setname(datas.studentName)
  //     setroll(datas.roll)
  //     setsemester(datas.semester)
  //     setshift(datas.shift)
  //     setsession(datas.session)
  //     setgender(datas.gender)
  // },[datas])

  const editdata = (id) => {
    if (
      inputdata.name &&
      inputdata.roll &&
      inputdata.semester &&
      inputdata.session &&
      inputdata.shift &&
      inputdata.gender &&
      inputdata.imgurl
    ) {
      const data = {
        name: inputdata.name,
        roll: inputdata.roll,
        semester: inputdata.semester,
        session: inputdata.session,
        shift: inputdata.shift,
        gender: inputdata.gender,
        imgurl: inputdata.imgurl,
        id,
      };
      console.log(data);
      axios.put("http://localhost:3002/api/edit",data)
      setinputdata({
        name: "",
        session: "",
        semester: "",
        gender: "",
        shift: "",
        roll: "",
        imgurl: "",
      });
      alert("Information Updated");
    } else {
      alert("invaled filed");
      setinvildColor(!invildColor);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br h-[100vh] from-[#41c4ec] to-[#3cf3c5]">
        {newarray.map((r) => (
          <>
            <div className="container flex flex-col  w-[90%] md:w-[50%] m-[0px_auto] p-8">
              <input
                className={
                  invildColor
                    ? " p-2 border-[2px] outline-none border-[#f70f0f] rounded"
                    : " p-2 border-[2px] outline-none border-[#918e8e] rounded"
                }
                type="text"
                value={inputdata.name}
                autoComplete="off"
                placeholder={r.studentName}
                name="name"
                onChange={handelinput}
              />
              <input
                className={
                  invildColor
                    ? " p-2 mt-2 border-[2px] outline-none border-[#f70f0f] rounded"
                    : " p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded"
                }
                type="number"
                value={inputdata.roll}
                autoComplete="off"
                placeholder={r.roll}
                name="roll"
                onChange={handelinput}
              />
              <input
                className={
                  invildColor
                    ? " p-2 mt-2 border-[2px] outline-none border-[#f70f0f] rounded"
                    : " p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded"
                }
                type="text"
                value={inputdata.semester}
                autoComplete="off"
                placeholder={r.semester}
                name="semester"
                onChange={handelinput}
              />
              <input
                className={
                  invildColor
                    ? " p-2 mt-2 border-[2px] outline-none border-[#f70f0f] rounded"
                    : " p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded"
                }
                type="text"
                value={inputdata.shift}
                autoComplete="off"
                placeholder={r.shift}
                name="shift"
                onChange={handelinput}
              />
              <input
                className={
                  invildColor
                    ? " p-2 mt-2 border-[2px] outline-none border-[#f70f0f] rounded"
                    : " p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded"
                }
                type="text"
                value={inputdata.session}
                autoComplete="off"
                placeholder={r.session}
                name="session"
                onChange={handelinput}
              />
              <input
                className={
                  invildColor
                    ? " p-2 mt-2 border-[2px] outline-none border-[#f70f0f] rounded"
                    : " p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded"
                }
                type="text"
                value={inputdata.gender}
                autoComplete="off"
                placeholder={r.gender}
                name="gender"
                onChange={handelinput}
              />
              <input
                className={
                  invildColor
                    ? " p-2 mt-2 border-[2px] outline-none border-[#f70f0f] rounded"
                    : " p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded"
                }
                type="text"
                value={inputdata.imgurl}
                autoComplete="off"
                placeholder={r.imgurl}
                name="imgurl"
                onChange={handelinput}
              />
              <button
                className=" mt-2 text-white bg-[#3d76f0] p-3 m-[0px_auto] w-[20%] rounded-[10px]"
                onClick={() => editdata(id)}
              >
                Update
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default EditStudentData;
