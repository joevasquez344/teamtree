import { useState } from "react";
import "../styles/globals.css";
import '../components/TextEditor/TextEditor.css'
// import type { AppProps } from 'next/app'
import { AuthProvider } from "../context/auth/AuthContext";
import Navbar from "../components/layout/Navbar/Navbar";
import { TeamsProvider, useTeams } from "../context/TeamsContext";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import SidebarContainer from "../components/layout/Sidebar/SidebarContainer";
import MobileSidebar from "../components/layout/Sidebar/MobileSidebar";
import MobileNavbar from "../components/layout/Navbar/MobileNavbar";
import ProtectedComponent from "../components/ProtectedComponent";
import TeamsHeader from "../components/teams/TeamsHeader";
import { useRouter } from "next/router";
import Header from "../components/layout/Header";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [mobileSidebar, setMobileSidebar] = useState(false);
  const openMobileSidebar = () => setMobileSidebar(true)
  const closeMobileSidebar = () => setMobileSidebar(false)
  return (
    <AuthProvider>
      {/* <NotificationsProvider> */}
      <TeamsProvider>
        {/* <div className='lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto'>
        <Navbar />
        <Component {...pageProps} />
      </div> */}
        <div
          //  style={{backgroundColor: "#2c2f33"}}
          className="fixed overflow-y-scroll w-full app bg-gray-700 h-full"
        >
          <div className="">
            <Navbar mobileSidebar={mobileSidebar} openMobileSidebar={openMobileSidebar} closeMobileSidebar={closeMobileSidebar} />
          </div>
          <div className=" grid grid-cols-12">
            {router.query.teamId && <SidebarContainer closeSidebar={closeMobileSidebar} mobileSidebar={mobileSidebar} />}

            <div
              className="  col-span-12 lg:col-span-9
              2xl:col-span-10  "
            >
              {/* <Header /> */}
              <Component {...pageProps} mobileSidebarState={mobileSidebar} />
            </div>
          </div>
          {/* <div className="sm:hidden absolute bottom-0 right-0 left-0 py-3 px-2 z-50 bg-gray-900">
            <ProtectedComponent>
              <MobileNavbar />
            </ProtectedComponent>
          </div> */}
        </div>
      </TeamsProvider>
      {/* </NotificationsProvider> */}
    </AuthProvider>
  );
}

export default MyApp;
