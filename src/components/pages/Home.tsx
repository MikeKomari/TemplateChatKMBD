import React, { useState } from "react";
import { ComboboxDemo } from "../ui/ComboBox";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedName, setSelectedName] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full ">
      <div className="flex justify-center min-h-screen items-center flex-col">
        <p className="font-bold text-center text-2xl text-mainThemeBgSecondary">
          Template Chat Magha Puja 2568
        </p>
        <p className="text-xs mt-2 text-gray-400">Created by Komari Software</p>
        <div className="my-5 flex justify-center items-center">
          <p className="text-lg text-gray-500 mr-2">What is your name?</p>
          <ComboboxDemo onChange={setSelectedName} />
        </div>
        <Link to={selectedName ? `/templatechat/${selectedName}` : "/"}>
          <Button variant={selectedName ? "default" : "secondary"}>
            Submit
          </Button>
        </Link>

        <Link to={"/"}>
          <p className="text-xs underline mt-5">Guide</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
