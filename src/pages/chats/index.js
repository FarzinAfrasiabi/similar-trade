import Layout from "@/container/layout";
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
                      <div className="p-2">
                        <h5>Chats</h5>
                        <ul className="flex flex-col gap-y-2">
                          {[1, 2, 2, 2, 2, 2, 2, 2].map((_, i) => {
                            return (
                              <li
                                key={i}
                                className="p-2 w-full border-b-2 border-gray-300 flex items-center"
                              >
                                <div className="w-7 h-7 rounded-full bg-gray-600"></div>
                                slaam
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
                salam
              </div>
              {/* chat content */}
              <div className="h-[calc(100% - 8.75rem)]">
                <div className="p-6 h-full overflow-y-auto overflow-x-hidden">
                  {/* chat list */}
                  {/* user chat  */}
                  <div className="flex flex-row mb-4 gap-x-4">
                    <div>
                      <div className="relative flex items-center overflow-hidden w-7 h-7 rounded-full bg-green-500 "></div>
                    </div>
                    {/* chat body */}
                    <div className="max-w-[calc(100% - 5.75rem)] md:max-w-[75%] lg:max-w-[60%] ">
                      <div className="bg-gray-200 shadow-md text-gray-900 rounded-lg rounded-tl-none mb-2">
                        <p className="p-2 max-w-fit ">salam mn raeen hasam</p>
                      </div>
                      <div className="   ">
                        <p className="p-2 max-w-fit shadow-md bg-gray-200 text-gray-900 rounded-lg rounded-tl-none">khobi ?</p>
                      </div>
                    </div>
                  </div>
                  {/* user2 chat */}
                  <div className="flex flex-row-reverse items-start gap-x-4 mb-4">
                    <div>
                      <div className="relative flex items-center overflow-hidden w-7 h-7 rounded-full bg-purple-500 "></div>
                    </div>
                    {/* chat body */}
                    <div className="bg-orange-500 text-white rounded-lg rounded-tr-none">
                      <p className="p-2 max-w-fit ">salam mn matin hasam</p>
                    </div>
                  </div>
                  <div className="flex flex-row mb-4 gap-x-4">
                    <div>
                      <div className="relative flex items-center overflow-hidden w-7 h-7 rounded-full bg-green-500 "></div>
                    </div>
                    {/* chat body */}
                    <div className="max-w-[calc(100% - 5.75rem)] md:max-w-[75%] lg:max-w-[60%] ">
                      <div className=" shadow-md text-gray-900 rounded-lg rounded-tl-none mb-2">
                        <p className="py- max-w-fit2 px-2 bg-gray-200">mrc mamnon</p>
                      </div>
                      <div className=" shadow-md text-gray-900 rounded-lg rounded-tl-none ">
                        <p className="py- max-w-fit2 px-2 bg-gray-200">che khabara ?</p>
                      </div>
                    </div>
                  </div>
                </div>
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
