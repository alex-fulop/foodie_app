import React, { useState } from "react";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiFillMessage, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import Footer from "./Footer";
import SuggestedAccounts from "./SuggestedAccounts";
import Menu from "./Menu";
import Messages from "../messages/Messages";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [currentPage, setCurrentPage] = useState<string>("home");
  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <Menu setCurrentPage={setCurrentPage} />

          {currentPage === "home" && (
            <>
              <Discover />
              <SuggestedAccounts />
              <Footer />
            </>
          )}

          {currentPage === "messages" && (
            <>
              <Messages />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
