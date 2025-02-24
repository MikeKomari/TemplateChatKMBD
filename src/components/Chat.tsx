import React from "react";
import { ChatData } from "./ChatData";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { formatChatMessage } from "../lib/utils";
type ChatProps = ChatData & {
  medParName: string;
  daytime: string;
  isBuddhist: boolean;
};
const Chat: React.FC<ChatProps> = ({
  daytime,
  isBuddhist,
  medParName,
  templateText,
  title,
}) => {
  const location = useLocation();
  const exactLocation: string = location.pathname?.split("/").pop() || "";
  const formattedText = formatChatMessage(templateText, {
    daytime,
    isBuddhist,
    medParName,
    exactLocation,
  });
  console.log(formattedText);
  const handleCopy = () => {
    navigator.clipboard.writeText(formattedText);
    toast("Text copied to clipboard!");
  };
  return (
    <div className="p-4 flex justify-center items-center flex-col">
      <p className="text-lg font-bold text-center text-mainThemeBgSecondary">
        {title}
      </p>
      <textarea
        readOnly
        value={formattedText}
        className="w-full h-[300px] text-xs p-4 border rounded-lg font-mono whitespace-pre"
      />
      <Button onClick={handleCopy} className="mt-4">
        Copy Text
      </Button>
    </div>
  );
};

export default Chat;
