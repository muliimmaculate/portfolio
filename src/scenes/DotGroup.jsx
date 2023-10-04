import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => { 
const selectedStyles = 'relative bg-blue-700 before:absolute before:w-4 before:h-4 before:rounded-full before:border-1 before:border-blue-600 before:left-[-50%] before:top-[-50%]';
   
   return (
       <div className="flex flex-col gap-4 fixed top-[60%] right-7">
       <AnchorLink 
           className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"}
           w-3 h-3 rounded-full`}
            href="#home"
            onClick={() => setSelectedPage("home")}
            />
            
   </div>
   );
};


export default DotGroup;
