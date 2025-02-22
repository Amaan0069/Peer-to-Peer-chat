
import React from "react";

const Message = ({ message, isOwn }) => {
  // USing the timestamp conect same as we do in whatsapp
  // Each time a meeeage is sent , i thsould show the time satp for that particular message
  // We will use in-built date function from react to implement this
  const date = new Date(message.timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;

  return (
    <div
      className={`min-w-[120px] max-w-sm p-2 m-1 xl:max-w-xl rounded-lg relative shadow-md break-words whitespace-normal ${
        isOwn ? "bg-[#DEE9FF]" : "bg-white"
      }`}
    >
      <div className="text-sm">{message.content}</div>
      <div className="text-right text-xs text-gray-500 mt-1">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
