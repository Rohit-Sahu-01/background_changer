import React, { useState } from "react";
import Side_btn from "./component/Side_btn";
const App = () => {

  const [color,setColor]=useState('olive')
  const [colorCode,setColorCode]=useState(false)
  return (
    <>
      {/* <Side_btn /> */}

      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <p className="text-xl  font-semibold border-2 border-sky-800 px-7  py-2 rounded-full">BACKGROUND CHANGER</p>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button className="block  py-2 px-6 text-white rounded-full bg-black hover:text-black hover:bg-white hover:border-solid hover:border-2 hover:border-black"
                    onClick={() => {
                      setColorCode(prevStatus => !prevStatus);
                    }}>CUSTOM COLOR</button>
  
                </li>
                
                <li>
                  <button
                    className="block py-2 px-6 text-white rounded-full bg-red-600 hover:text-red-600 hover:bg-white hover:border-solid hover:border-2 hover:border-red-600"
                    onClick={() => {
                      setColor("red");
                    }}
                  >
                    RED
                  </button>
                </li>
                <li>
                  <button
                    className="block py-2 px-6 text-white rounded-full bg-indigo-600 hover:text-indigo-600 hover:bg-white hover:border-solid hover:border-2 hover:border-indigo-600"
                    onClick={() => {
                      setColor("indigo");
                    }}
                  >
                    INDIGO
                  </button>
                </li>
                <li>
                  <button
                    className="block py-2 px-6 text-white rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-solid hover:border-2 hover:border-sky-600"
                    onClick={() => {
                      setColor("blue");
                    }}
                  >
                    SKY
                  </button>
                </li>
                <li>
                  <button
                    className="block py-2 px-6 text-white rounded-full bg-green-600 hover:text-green-600 hover:bg-white hover:border-solid hover:border-2 hover:border-green-600"
                    onClick={() => {
                      setColor("green");
                    }}
                  >
                    GREEN
                  </button>
                </li>
                <li>
                  <button
                    className="block py-2 px-6 text-white rounded-full bg-blue-600 hover:text-blue-600 hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600"
                    onClick={() => {
                      setColor("blue");
                    }}
                  >
                    BLUE
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="mt-6" style={{marginInlineStart:'530px'}}>
                    {colorCode && <input type="text" className="block rounded w-64" placeholder="Enter Name or Color Code" onChange={(e)=>setColor(e.target.value)} />}
        </div>
                    
      </div>
    </>
  );
};

export default App;
