import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 py-2 sm:py-5 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/%E2%84%A4%EA%AD%BC%EA%AD%BA%EA%AE%B6-%F0%9D%95%86%D5%BF%EA%AE%8B%EA%AE%96%EA%AD%B1%EA%AD%BC%EA%AE%B6%E2%B4%8E-a30a17157/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm text-center">
            &copy; 2023 Isaac Zeak Oshireku. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm text-center">
            Designed by
            <a
              rel="nofollow"
              href="https://www.linkedin.com/in/sajid-bhatti-b2436b24a/"
              className="text-cyan-500 hover:underline ml-1"
            >
              Muhammad Abu Bakar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
