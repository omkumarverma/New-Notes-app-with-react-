import React from "react";
import { useState } from "react";

const app = () => {
  const [title, setTitle] = useState(""); // this is use for title ...
  const [detail, setDetail] = useState(""); // this is used for details notes ....
  const [task, setTask] = useState([]); // this is for container
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, detail });
    setTask(copyTask);
    // console.log(copyTask);

    setTitle(""); //
    setDetail("");
  };

  return (
    <div className=" flex   h-screen text-amber-50  ">
      <div className="  p-10 w-1/2 bg-gray-900 ">
        <h1 className=" text-4xl font-bold text-blue-200 ">Create New Notes</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=" flex  gap-5 flex-col p-10   "
        >
          {/* //phela input for hading */}
          <input
            className="p-5 h-10 font-bold border-2 "
            type="text"
            placeholder="Enter your Heading"
            onChange={(e) => {
              setTitle(e.target.value);
              // console.log(e.target.value);
            }}
            value={title}
          />
          {/* detailed input */}
          <textarea
            className="  px-5 py-3 font-medium h-27  border-2"
            type="text"
            placeholder="Enter detail"
            onChange={(e) => {
              // console.log(e.target.value);
              setDetail(e.target.value);
            }}
            value={detail}
          />
          <button className=" active:scale-95 text-black px-2 py3 bg-amber-50 border-2">
            Add Notes
          </button>
        </form>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      </div>
      <div className="  p-10  w-1/2 bg-gray-800 ">
        {" "}
        {/*  this is your  right contanner  for recent notes   jis me sub note add hoga */}
        <h1 className="text-4xl font-bold text-blue-300 ">
          {" "}
          {/*  recentr notes text  hading  */} This is your Recent Nots
        </h1>
        <div className=" flex flex-wrap items-start   gap-5 p-10  h-full overflow-auto">
          {task.map(function (elem, book) {
            return (
              <div
                key={book}
                className=" relative h-50  w-42 p-3 font-bold rounded-xl  border-4 text-black  bg-white  "
              >
                <h1 className="bg-red-500 w-5  rounded-2xl "> X</h1>
                <h3 className=" text-2xl font-bold leading-tight  ">
                  {elem.title}
                  <p className="  mt-2 leading-tight font-medium  text-gray">
                    {elem.detail}
                  </p>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default app;

//  to add in git hub
//  cd ..
// git add .
// git commit -m  "complet note application"
//  git push -u origin  main
