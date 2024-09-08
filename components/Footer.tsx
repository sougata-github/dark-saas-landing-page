import Insta from "@/assets/icons/Insta";
import Tiktok from "@/assets/icons/Tiktok";
import Youtube from "@/assets/icons/Youtube";
import XSocial from "@/assets/icons/Xsocial";
import Pinterest from "@/assets/icons/Pinterest";

const Footer = () => {
  return (
    <footer className="text-white/60 text-center py-5 border-t border-white/20">
      <div className="section-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="">&#169; 2024 Your Company. All Rights reserved</div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <XSocial />
            </li>
            <li>
              <Insta />
            </li>
            <li>
              <Tiktok />
            </li>
            <li>
              <Youtube />
            </li>
            <li>
              <Pinterest />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
