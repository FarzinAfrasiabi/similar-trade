import { useState } from "react";
import SearchTrading from "@/components/search/searchTrader";
import Layout from "@/container/layout";
import CustomModals from "@/components/custom/customModal";

const GetSignalPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandle = (status) => {
    setOpenModal(status);
  };
  return (
    <Layout>
      {/* modal */}
      {openModal && (
        <CustomModals
          openModal={openModal}
          handleClose={() => setOpenModal(false)}
          title={"Admin not found"}
        >
          <div className="py-8 flex items-center justify-center">
            <p className="text-xl">
              Your entered signaler id is wrong, Contact your signaler
            </p>
          </div>
        </CustomModals>
      )}
      {/* search box */}
      <div className="grid grid-cols-12 gap-4">
        <SearchTrading title={"Forex trading"} onModal={openModalHandle} />
        <SearchTrading title={"Crypto trading"} onModal={openModalHandle} />
      </div>
      {/* training video  */}
      {/* if not searching  */}
      <div className="grid grid-cols-12 gap-x-8 gap-y-16">
        {[1, 2, 3, 4, 4, 4].map((item, i) => (
          <div
            key={i}
            className="col-span-12 md:col-span-6 rounded-lg shadow-lg h-full  bg-white"
          >
            <video className="h-full w-full rounded-lg" controls>
              <source
                src={`${
                  item == 4 ? "/videos/flowbite.mp4" : "/videos/demo.mp4"
                }`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default GetSignalPage;
