import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-sky-500 p-5 text-4xl m-6">
      User: {userid}
    </div>
  );
}

export default User;
