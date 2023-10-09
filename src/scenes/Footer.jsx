import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 pt-4 text-center">
      <div className="flex flex-col justify-center items-center">
      <div className="mt-4 flex justify-center">
          <SocialMediaIcons />
        </div>
        <p className="font-playfair font-semi-bold text-blue-400">
          &copy;2023 Imm. All Rights Reserved.
        </p>
      
      </div>
    </footer>
  );
};

export default Footer;
