import Layout from "@/container/layout";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import {
  HiListBullet,
  HiMagnifyingGlass,
  HiMiniPaperAirplane,
  HiMiniPaperClip,
} from "react-icons/hi2";
const ChatPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      {/* chats */}
      <div className="p-2 lg:p-10 h-full">
        <div className="lg:hidden block">
          <Drawer open={open} onClose={() => setOpen(false)} className="p-4">
            <div className="py-2">
              <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Users
                </Typography>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              <SideBarChat hidden={false} />
            </div>
          </Drawer>
        </div>
        <div className="w-full p-2 bg-white shadow-md rounded-xl h-full">
          <div className="w-full h-full flex relative overflow-hidden">
            {/* chat sidebar */}
            <SideBarChat />
            {/* chats main */}
            <div className="flex-grow-1 w-full h-full ">
              {/* chat user header */}
              <div className="w-full flex items-center justify-between p-4  border-b  border-gray-300">
                <button
                  onClick={() => setOpen(true)}
                  type="button"
                  className="text-2xl pr-4 flex lg:hidden"
                >
                  <HiListBullet className="text-2xl text-gray-600" />
                </button>
                <div className="  w-full flex items-center gap-x-2 ">
                  <div className="w-7 h-7 rounded-full bg-gray-600"></div>
                  <span className="text-sm">farzin afrasiabi</span>
                </div>
                <span className="text-sm text-green-600">Online</span>
              </div>
              {/* chat content */}
              <div className="h-[calc(100%-7.25rem)]">
                <div className="p-6 h-full overflow-y-auto overflow-x-hidden">
                  {/* chat list */}
                  {/* my chat */}
                  <UserChat isReverse={true}>
                    <ContentData isReverse={true} content={"salam khobi"} />
                    <ContentData isReverse={true} content={"matin hassam !"} />
                  </UserChat>
                  {/* user chat  */}
                  <UserChat>
                    <ContentData content={"salam khobi"} />
                    <ContentData
                      content={
                        "matin chetori che khabar az front end barname!?"
                      }
                    />
                  </UserChat>
                  <UserChat isReverse={true}>
                    <ContentData
                      isReverse={true}
                      content={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      }
                    />
                    {/* <ContentData isReverse={true} content={"matin hassam !"} /> */}
                  </UserChat>
                  <UserChat>
                    <ContentData
                      content={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      }
                    />
                    {/* <ContentData isReverse={true} content={"matin hassam !"} /> */}
                  </UserChat>
                </div>
                {/* form */}
                <form className="w-full py-3 px-6 bg-[#FAFAFB] shadow-2xl border-t">
                  <div className="w-full gap-x-4 flex items-center justify-between">
                    <div className="w-9 h-9 rounded-full bg-gray-500 flex items-center justify-center"></div>
                    <div className="relative flex-1 flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="type message"
                        className="p-2 resize-none h-9 rounded-md border-none outline-none flex-1 ring-1 ring-gray-400 focus:ring-2 focus:shadow-md "
                      />
                    </div>
                    <div className="flex items-center gap-x-2 lg:gapx-x-4">
                      <button
                        type="submit"
                        className="p-2 bg-blue-gray-600 text-white rounded-md"
                      >
                        <HiMiniPaperAirplane />
                      </button>
                      <div className="flex items-center gap-x-2">
                        <button type="button"></button>
                        <label htmlFor="file_data">
                          <span className="cursor-pointer text-gray-600">
                            <HiMiniPaperClip />
                          </span>
                        </label>
                        <input id="file_data" type="file" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;

function UserChat({ isReverse = false, children }) {
  return (
    <div
      className={`flex ${
        isReverse ? "flex-row-reverse" : "flex-row"
      }  mb-4 gap-x-4 `}
    >
      <div>
        <div
          className={`relative flex items-center overflow-hidden w-7 h-7 rounded-full ${
            isReverse ? "bg-green-500" : "bg-gray-500"
          } `}
        ></div>
      </div>
      {/* chat body */}
      <div className="max-w-[calc(100% - 5.75rem)] md:max-w-[75%] lg:max-w-[60%] ">
        {children}
      </div>
    </div>
  );
}

function ContentData({ isReverse = false, content }) {
  return (
    <div className="mb-4">
      <p
        className={`py-3 mt-0 mb-0  px-4 w-fit ${
          isReverse
            ? "bg-[#F1F1F5] rounded-tr-none ml-auto mr-0"
            : "bg-white rounded-tl-none ml-0 mr-auto"
        } text-[#44444F] text-sm ring-1  rounded-2xl  ring-[#E2E2EA]`}
      >
        {content}
      </p>
    </div>
  );
}

function SideBarChat({ hidden = true }) {
  return (
    <div className={`${hidden ? "hidden" : "block"}`}>
      <div className="h-full block static border-r-2 border-gray-400 ">
        <div
          className={`flex flex-col static overflow-y-auto overflow-x-hidden h-full ${
            hidden ? "w-80" : ""
          }`}
        >
          {/* search user and other */}
          <div className="p-3 border-b  flex items-center gap-x-4  border-gray-300">
            <div className="w-9 h-9 rounded-full bg-gray-600"></div>
            <div className="relative flex items-center justify-between">
              <input
                type="text"
                className="border-none py-2 outline-none ring-1 ring-gray-400 rounded-md px-2 text-sm focus:shadow focus:ring-2 transition-all ease-in-out duration-100"
                placeholder="search"
              />
              <span className="absolute text-gray-600 right-2 text-xl">
                <HiMagnifyingGlass />
              </span>
            </div>
          </div>

          {/* users */}
          <div className="h-[calc(100%-4.0625rem)]">
            <div className="relative h-full overflow-y-auto overflow-x-hidden ">
              <div className="p-2 flex flex-col gap-y-6">
                <h5>Chats</h5>
                <ul className="flex flex-col gap-y-4">
                  {[1, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5].map((_, i) => {
                    return (
                      <li
                        key={i}
                        className="p-2 w-full border-b-2 border-gray-300 flex gap-x-2 last:border-b-0 items-center"
                      >
                        {/* avatar */}
                        <div className="w-9 h-9 rounded-full bg-gray-600"></div>
                        <div className="flexx flex-col gap-y-2">
                          <h2 className="text-sm font-semibold">{`user__${
                            i + 1
                          }`}</h2>
                          <h4 className="text-xs text-gray-500">@username</h4>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
