import Aside from "./aside";
import BottomNavigation from "./bottom";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen  bg-[#FAFAFB]">
      {/* Desktop sidebar */}
      <Aside />
      <div className="flex flex-1 flex-col w-full overflow-hidden">
        {/* header */}
        <Header />
        <main className="h-full flex flex-col gap-y-4 overflow-y-auto overflow-x-hidden  px-3 lg:px-6 py-4 mb-10 pb-20 lg:pb-0 lg:mb-0 ">
          {children}
        </main>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Layout;
