import React from "react";
import { Photo1, Photo2, Photo3 } from "../../assets/Images";

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <section className="w-[75%] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold w-[50%] text-center">
          Writes, brainstorms, edits, and explores ideas with you
        </h1>
        <a href="">Learn more about writing with ChatGPT</a>
        <img src={Photo1} className="rounded-xl" />
      </section>
      <section className="w-[75%] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold w-[50%] text-center">
          Writes, brainstorms, edits, and explores ideas with you
        </h1>
        <a href="">Learn more about writing with ChatGPT</a>
        <img src={Photo1} className="rounded-xl" />
      </section>
      <section className="w-[75%] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold w-[50%] text-center">
          Summarize meetings. Find new insights. Increase productivity.
        </h1>
        <img src={Photo2} className="rounded-xl" />
      </section>
      <section className="w-[75%] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold w-[50%] text-center">
          Learn something new. Dive into a hobby. Answer complex questions.
        </h1>
        <img src={Photo3} className="rounded-xl" />
      </section>
    </div>
  );
};

export default Info;
