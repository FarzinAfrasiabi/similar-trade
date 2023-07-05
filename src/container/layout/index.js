import Aside from "./aside";
import BottomNavigation from "./bottom";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#FAFAFB]">
      {/* Desktop sidebar */}
        <Aside />
          <div className="flex flex-1 flex-col w-full">
              {/* header */}
              <Header />
              <BottomNavigation />
              <main className="h-full flex flex-col gap-y-4 overflow-y-auto px-6 py-4 mb-10">
                  { children}
              </main>
          </div>
    </div>
  );
};

export default Layout;
