import Aside from "./aside";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#FAFAFB]">
      {/* Desktop sidebar */}
        <Aside />
          <div className="flex flex-1 flex-col w-full">
              {/* header */}
              <Header />
              <main className="h-full overflow-y-auto px-6 py-4">
                  { children}
              </main>
          </div>
    </div>
  );
};

export default Layout;
