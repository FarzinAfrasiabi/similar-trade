import TicketTable from "@/components/table/ticketTable";
import Layout from "@/container/layout";
import { HiMiniPaperAirplane, HiMiniPaperClip } from "react-icons/hi2";
function createData(
  tickeId,
  startin,
  department,
  subject,
  RelatedService,
  LastReply,
  status,
  action
) {
  return {
    tickeId,
    startin,
    department,
    subject,
    RelatedService,
    LastReply,
    status,
    action,
  };
}

const TICKET_DATA = [
  createData(
    "#1234578fad",
    new Date().toISOString(),
    "Site Support",
    "Check your product statistics daily",
    "server #242548",
    "2023-08-03T22:39:10.900Z",
    "Progressing"
  ),
];

const ChatId = () => {
  return (
    <Layout>
      <div className="p-10 flex flex-col gap-y-2">
        {/* table */}
        <TicketTable rows={TICKET_DATA} isAction ={true} />
        <div className="w-full p-2 bg-white shadow-md rounded-xl h-full max-h-[76vh]">
          <div className="w-full h-full flex relative overflow-hidden">
            <div className="flex-grow-1 w-full h-full ">
              {/* chat user header */}
              <div className="w-full flex items-center justify-between p-4  border-b  border-gray-300">
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

export default ChatId;

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
