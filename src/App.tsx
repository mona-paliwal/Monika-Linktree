import monikapic from "./assets/monikabg.png";
import {
  TbWorld,
  TbUser,
  TbBrandGithub,
  TbShare2,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandBehance,
} from "react-icons/tb";

function App() {
  const links = [
    {
      icon: <TbWorld className="text-[35px]" />,
      text: "My Website",
      url: "https://monika-link.vercel.app/",
    },
    {
      icon: <TbUser className="text-[35px]" />,
      text: "My Résumé",
      url: "https://monika-link.vercel.app/resume/",
    },
    {
      icon: <TbUser className="text-[35px]" />,
      text: "My Portfolio",
      url: "https://monika-link.vercel.app/portfolio",
    },
    {
      icon: <TbBrandInstagram className="text-[35px]" />,
      text: "Instagram",
      url: "https://www.instagram.com/codewithmonika_/",
    },
    {
      icon: <TbBrandLinkedin className="text-[35px]" />,
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/monikapaliwal1998/",
    },
    {
      icon: <TbBrandGithub className="text-[35px]" />,
      text: "GitHub",
      url: "https://github.com/mona-paliwal",
    },
    {
      icon: <TbBrandBehance className="text-[35px]" />,
      text: "Behance",
      url: "https://www.behance.net/monapaliwal",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-3 my-12 md:mx-12">
      
      <img
        className="h-24 rounded-full"
        src={monikapic}
        alt="Monika Paliwal"
      />

      <p className="text-white my-3 text-lg font-bold">
        Monika Paliwal
      </p>

      <p className="text-white text-base text-center">
        Web Designer | UI/UX Designer
      </p>

      <div className="text-[#BDBDBD] flex flex-col gap-5 mt-7 md:w-[55%] w-full items-center justify-center">

        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-center ml-2 mr-4">
              
              {item.icon}

              <p className="p-5">{item.text}</p>

              <TbShare2
                className="text-[40px] hover:bg-[#5F5E5E] transition duration-300 rounded-full p-2"
                title={item.text}
              />

            </div>
          </a>
        ))}

      </div>

      <p className="text-white mt-10 text-center">
        Made by Monika Paliwal
      </p>

    </div>
  );
}

export default App;