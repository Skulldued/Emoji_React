import axios, { all } from "axios";
import React, { useEffect, useState } from "react";

const Meme = ({ url }) => {
  const [error, setError] = useState(null);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setAllMemes(response.data.data.memes);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };
    fetchData();
  },);

  const getImage = () => {
    const image = allMemes[Math.floor(Math.random() * allMemes.length)];
    setMeme((sunny) => ({
      ...sunny,
      image: image.url,
    }));
  
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("HandleChange Function Call", event.target);
    setMeme((sunny) => ({
      ...sunny,
      [name]: value,
    }));

  
  };
  return (
    <div className="w-full p-10 bg-black ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-4">
          <div>
            <input
              type="text"
              placeholder="Enter Top Text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
              className="px-2 py-1 m-2 bg-transparent border text-white"
            />
            <input
              type="text"
              placeholder="Enter Bottom Text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
              className="px-2 py-1 m-2 bg-transparent border text-white"
            />
          </div>
          {console.log("All Images", typeof allMemes)}
          <div>
            <button
              className="bg-green-400  px-2 py-1 rounded-md shadow-md"
              onClick={getImage}
            >
              Generate a new Meme
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-2 text-white p-2 max-h[450px] my-6  max-w-[550px]">
            <div>
              <img src={meme.image} alt="" className="object-cover " />
              <h2>{meme.topText}</h2>
              <h2>{meme.bottomText}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meme;