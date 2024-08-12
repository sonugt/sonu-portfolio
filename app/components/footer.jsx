// @flow strict
import Link from 'next/link';
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Made with 💙 <Link target="_blank" href="https://www.linkedin.com/in/dxsonu/" className="text-[#16f2b3]">Sonu Gupta</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/dxsonu7"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoLogoGithub />
              <span>Dxsonu</span>
            </Link>
            <Link
              target="_blank"
              href="https://linkedin.com/in/dxsonu"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoLogoLinkedin />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;