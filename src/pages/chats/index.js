import Layout from "@/container/layout";
import { FingerPrintIcon } from "@heroicons/react/24/outline";
import {
  Badge,
  Box,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
const ChatPage = () => {
  //* hooks
  const theme = useTheme();
  return (
    <Layout>
      {/* chats */}
      <div className="p-10 h-full">
        <div className="w-full p-2 bg-white shadow-md rounded-xl h-full">
          <div className="w-full h-full flex relative overflow-hidden">
            {/* chat sidebar */}
            <div>
              <div className="h-full block static border-r-2 border-gray-400">
                <div className="w-80 flex flex-col static overflow-y-auto">
                  {/* search user and other */}
                  <div className="p-3 border-b-1 border-b-gray-400 flex items-center">
                    <div className="w-7 h-7 rounded-full bg-gray-600"></div>
                  </div>
                  {/* users */}
                  <div className="h-[calc(100% - 4.0625rem)]">
                    <div className="relative h-full overflow-hidden ">
                      <div className="p-2 flex flex-col gap-y-6">
                        <h5>Chats</h5>
                        <ul className="flex flex-col gap-y-4">
                          {[1, 2, 2, 2, 2, 2, 2, 2].map((_, i) => {
                            return (
                              <li
                                key={i}
                                className="p-2 w-full border-b-2 border-gray-300 flex gap-x-2 items-center"
                              >
                                <div className="w-7 h-7 rounded-full bg-gray-600"></div>
                                {`user__${i + 1}`}
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
            {/* chats main */}
            <div className="flex-grow-1 w-full h-full ">
              {/* chat user header */}
              <div className="p-3  border-b-2 border-gray-800 w-full flex ">
                <div className="w-7 h-7 rounded-full bg-gray-600"></div>
                userOnline
              </div>
              {/* chat content */}
              <div className="h-[calc(100%-6.25rem)]">
                <div className="p-6 h-full overflow-y-auto overflow-x-hidden">
                  {/* chat list */}
                  {/* user chat  */}
                  {/* my chat */}
                  {[1, 2, 3, 4, 5, 6,7,7,7,7,7,7,8,8,8,8].map((item) => {
                    return (
                      <UserChat
                        key={item}
                        isReverse={item % 2 === 0 ? true : false}
                        content={"hello my name is  matin-sangabi"}
                      />
                    );
                  })}
                </div>
                <form className="w-full py-3 px-6 bg-[#FAFAFB] shadow-2xl border-t">
                  <div className="w-full gap-x-10 flex items-center justify-between">
                    <p>avatar</p>
                    <p className="flex-1">input type</p>
                    <p className="">actions button</p>
                  </div>
                </form>
              </div>
              {/* form */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;

function UserChat({ content, isReverse = false }) {
  return (
    <div
      className={`flex ${
        isReverse ? "flex-row-reverse" : "flex-row"
      }  mb-4 gap-x-4 `}
    >
      <div>
        <div className="relative flex items-center overflow-hidden w-7 h-7 rounded-full bg-green-500 "></div>
      </div>
      {/* chat body */}
      <div className="max-w-[calc(100% - 5.75rem)] md:max-w-[75%] lg:max-w-[60%] ">
        <ContentData isReverse={isReverse} content={content} />
      </div>
    </div>
  );
}

function ContentData({ isReverse, content }) {
  return (
    <div className="mb-4">
      <p
        className={`py-3 mt-0 mb-0 ml-auto mr-0 px-4 w-fit ${
          isReverse
            ? "bg-[#F1F1F5] rounded-tr-none "
            : "bg-white rounded-tl-none"
        } text-[#44444F] text-sm ring-1  rounded-2xl  ring-[#E2E2EA]`}
      >
        {content}
      </p>
    </div>
  );
}
