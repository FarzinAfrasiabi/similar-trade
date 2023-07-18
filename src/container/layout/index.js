import Aside from "./aside";
import BottomNavigation from "./bottom";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#FAFAFB]">
      {/* Desktop sidebar */}
        <Aside />
          <div className="flex flex-1 flex-col w-full">
              {/* header */}
              <Header />
              <main className="h-full flex flex-col gap-y-4 overflow-y-auto px-6 py-4 mb-10 lg:mb-0">
                  { children}
              </main>
              <BottomNavigation />
          </div>
    </div>
  );
};

export default Layout;
