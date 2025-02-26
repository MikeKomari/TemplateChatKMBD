import { Button } from "../ui/button";
import { useLocation } from "react-router-dom";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "../ui/input";
import { AllTemplateChat } from "../ChatData";
import Chat from "../Chat";

const TemplateChat = () => {
  const [medParName, setMedParName] = useState<string>("NAMAMEDPAR");
  const [daytime, setDaytime] = useState<string>("Pagi");
  const [isBuddhist, setIsBuddhist] = useState<boolean>(true);
  const location = useLocation();

  return (
    <>
      <div className="min-h-screen w-full ">
        <p className="text-xs mt-2 text-center text-gray-400">
          Created by Komari Software
        </p>

        <div className="mt-10 flex justify-around items-center">
          <select
            name=""
            id=""
            className="p-4"
            onChange={(e) => setIsBuddhist(e.target.value === "buddhist")}
          >
            <option value="buddhist">Buddhist</option>
            <option value="nonbuddhist">Non-Buddhist</option>
          </select>
          <select
            name=""
            id=""
            className="p-4"
            onChange={(e) => setDaytime(e.target.value)}
          >
            <option value="Pagi">Pagi</option>
            <option value="Siang">Siang</option>
            <option value="Malam">Malam</option>
          </select>
          <Input
            className="p-4"
            placeholder="Nama Media/Contact Person"
            value={medParName}
            onChange={(e) => setMedParName(e.target.value)}
          />
        </div>

        {AllTemplateChat.map((chat, index) => (
          <div key={index}>
            <Chat
              daytime={daytime}
              isBuddhist={isBuddhist}
              medParName={medParName}
              templateText={chat.templateText}
              title={chat.title}
              key={index}
            />
          </div>
        ))}

        <Toaster />
      </div>
    </>
  );
};

export default TemplateChat;
