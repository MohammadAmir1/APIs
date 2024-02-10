import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiCaller = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUserData(response.data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[400px] h-[250px] mx-auto mt-4 bg-gray-100 overflow-hidden rounded-md border-[4px] border-black">
      {loading ? (
        <p className="p-4 text-center">Loading...</p>
      ) : (
        <div className="p-4 flex items-center">
          <img
            className="h-40 w-40  mr-4  border-[2px] rounded-sm mt-6 border-gray-500"
            src={userData.picture.large}
            alt={`${userData.name.first} ${userData.name.last}`}
          />
          <div className="pt-6">
            <p className="text-gray-700   mb-1">
              First name: {`${userData.name.first} `}
            </p>
            <p className="text-gray-700   mb-1">
              Last name: {`${userData.name.last} `}
            </p>
            <p className="text-gray-600 mb-2">Gender: {userData.gender}</p>
            <p className="text-gray-600 mb-2">Phone: {userData.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiCaller;
