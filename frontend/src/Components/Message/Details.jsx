
import React from "react";
// A simple helper to compute initials 
//SAme concept using login where we are getting the intials from the DB
//These intials will helps us to get the data already stored
const getInitials = (name) => {
  if (!name) return "";
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const Details = ({ contact, onClose }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-start p-4">
        <button onClick={onClose} className="text-gray-500  text-2xl hover:text-gray-800">
          &times;
        </button>
      </div>
      {/* When a person profile is clicked, it should show the following parameters
            name , profile , Phone NO.*/}
      <div className="flex flex-col items-center p-4">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold mb-4">
          {getInitials(contact.name)}
        </div>
        <div className="text-xl font-semibold mb-1">{contact.name}</div>
        <div className="text-gray-500 mb-1">{contact.email}</div>
        <div className="text-gray-500">
          {contact.phone ? contact.phone : "Phone not available"}
        </div>
      </div>
      <hr className="border-t border-gray-400 w-11/12 mx-auto" />
      <div className="flex-1"></div>
    </div>
  );
};

export default Details;
