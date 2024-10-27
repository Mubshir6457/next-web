import React from "react";

const Footer =() => {
    return (
      <footer className="bg-black text-gray-400 py-12  bottom-0 left-0 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p>
            Our platform offers resources, tutorials, and mentorship to guide you on your coding journey.
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links</h3>
            <ul>
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a  className="hover:text-white">About</a></li>
              <li><a href="/courses" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
     
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <ul>
              <li><a href="https://github.com/Mubshir6457" className="hover:text-white">Github</a></li>

              <li><a  className="hover:text-white">Instagram</a></li>
              <li><a  className="hover:text-white">Facebook</a></li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <p>Email: <a href="/mail@gmail.com" className="hover:text-white">muhammadmubashis6457@gmail.com</a></p>
            <p>Phone: <span className="hover:text-white">0326 3429331</span></p>
          </div>
        </div>
        <p className="flex justify-center p-2">©2024:Master Cref of Coding</p>
      </footer>
    );
  }
  
  export default Footer