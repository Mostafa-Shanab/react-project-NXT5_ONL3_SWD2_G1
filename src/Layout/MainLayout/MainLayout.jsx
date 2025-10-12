import { Outlet } from "react-router";
import TheHeader from "../../components/TheHeader/TheHeader";
import TheFooter from "./../../components/TheFooter/TheFooter";
import UserProvider from "@/context/user/UserProvider";

function MainLayout() {
  return (
    <div className="main-layout">
      {/* <UserProvider> */}
      <TheHeader />
      <main>
        <Outlet />
      </main>
      <TheFooter />
      {/* </UserProvider> */}
    </div>
  );
}

export default MainLayout;
