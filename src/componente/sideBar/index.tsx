import Image from "next/image";
import LogoI from "@/assets/IconsIwhite.png";
import Logo from "@/assets/LogoWhite.png";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { MdStore } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdAddBusiness } from "react-icons/md";
import { useApp } from "@/context/useApp";
import { Li } from "@/componente/Li";
import { TiUserAdd } from "react-icons/ti";
export function SideBar() {
  const { showSideBar } = useApp();
  const router = useRouter();

  function handleLogout() {
    router.push("/");
  }

  return (
    <nav
      className={`fixed left-2 top-2 bottom-2 rounded-[24px] flex flex-col items-center h-auto bg-[#3D3C6C] w-16  shadow-md transition-all duration-800 
        ${showSideBar ? "w-40 " : "w-16 "}
          
      }`}
    >
      <div className="mt-4">
        {showSideBar ? (
          <Image
            src={Logo}
            alt="Logo"
            width={130}
            height={130}
            className="mt-6"
          />
        ) : (
          <Image
            src={LogoI}
            alt="Logo"
            width={40}
            height={40}
            className="mt-6"
          />
        )}
      </div>

      <ul className="mt-14 flex flex-col h-full w-full items-center  py-3 ">
        <Li>
          <Link
            href="/dashboard"
            className={`w-full h-full flex items-center  gap-2 ${
              showSideBar ? "justify-start " : "justify-center"
            }`}
          >
            <BsMenuButtonWideFill size={22} />
            {showSideBar && <span>Painel</span>}
          </Link>
        </Li>

        <Li>
          <MdAddBusiness size={25} className="text-gray-100 " />{" "}
          {showSideBar && <span>Cadastrar loja</span>}
        </Li>
        <Li>
          <MdStore size={25} className="text-gray-100 " />{" "}
          {showSideBar && <span>Editar loja</span>}
        </Li>
        <Li>
          <TiUserAdd
            className={`text-gray-50 ${
              showSideBar ? "text-[35px]" : "text-3xl"
            }`}
          />{" "}
          {showSideBar && <span>Cadastrar usuário</span>}
        </Li>
        <Li>
          <FaUserAlt size={22} className="text-gray-100" />{" "}
          {showSideBar && <span>Editar usuário</span>}
        </Li>

        <Li>
          <Link
            href="/dashboard"
            className={`w-full h-full flex items-center  gap-2 ${
              showSideBar ? "justify-start " : "justify-center"
            }`}
          >
            <FaFilePdf size={22} />
            {showSideBar && <span>Exporta PDF</span>}
          </Link>
        </Li>

        <Li>
          <FaUserCircle size={22} className="text-gray-100" />{" "}
          {showSideBar && <span>Perfil</span>}
        </Li>
        <Li className="mt-auto mb-4 bg-red-500 hover:bg-red-600 flex  justify-center ">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full justify-center  transition duration-800 hover:translate-x-2 cursor-pointer"
          >
            <IoLogOut size={25} className="text-gray-100    " />{" "}
            {showSideBar && <span>Sair</span>}
          </button>
        </Li>
      </ul>
    </nav>
  );
}
