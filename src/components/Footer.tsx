import React from "react";
import Link from "next/link";
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
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="hover:text-white">About</li>
              <li><Link href="/courses" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
  
     
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <ul>
              <li><Link href="https://github.com/Mubshir6457" className="hover:text-white">Github</Link></li>
              <li className="hover:text-white">Instagram</li>
              <li><Link href="https://www.facebook.com/profile.php?id=61567329344717" className="hover:text-white">Facebook</Link></li>
            
            </ul>
          </div>
  
         
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <p>Email: <Link href="contact@c2tec.com" className="hover:text-white">muhammadmubashis6457@gmail.com</Link></p>
            <p>Phone: <span className="hover:text-white">0326 3429331</span></p>
          </div>
        </div>
        <p className="flex justify-center p-2">©2024:Master Cref of Coding</p>
      </footer>
    ); 
  }
  
  export default Footer