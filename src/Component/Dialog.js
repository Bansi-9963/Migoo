// Dialog.js

import React from 'react';

const Dialog = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="fixed inset-0 bg-gray-700 opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg overflow-y-scroll h-[600px] scroll-smooth">
        <button
          className="absolute top-0 right-0 p-4 text-gray-700"
          onClick={onClose}
        >
         <p>Close</p>
        </button>
        <h1 className="text-2xl font-bold mb-4">Address</h1>
        <form>
          <label className="block ">
            <span className="block pl-1 font-medium">Address Title:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>
          <label className="block">
            <span className="block pl-1 font-medium mt-2">Address Line 1 :</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Address Line 2 :</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">City:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">State:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Country:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>



          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>
        
          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>

          <label className="block">
            <span className="block pl-1 font-medium mt-2">Postal Code:</span>
            <input type="text" name="name" className="border-[1px] border-solid border-slate-300 w-96 p-1 rounded-lg" />
          </label>



          <br/>
          <input type="submit" value="Submit" className="border-[1px] border-solid divided-slate-400 mt-3 p-1 rounded-lg font-medium tracking-wide hover:bg-slate-200 hover:text-[#E6992a]"/>
        </form>
          </div>
      </div>
  
  );
};

export default Dialog;
