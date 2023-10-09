  
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/immaculate-muli-a26708242/ "
        target="_blank"
        rel="noreferrer"
      >
        <img alt="" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.behance.net/immaculatemuli"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="" src="../assets/behance.png" />
      </a>

      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/muliimmaculate"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="" src="../assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
