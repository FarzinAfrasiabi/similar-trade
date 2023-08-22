import ServerDesktopTable from "@/components/@section/serverDesktopTable";
import ServerMobileTable from "@/components/@section/serverMobileTable";
import MainTable from "@/components/@section/table";
import Layout from "@/container/layout";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

//* for create Data
function createData(
  serverId,
  IpAddress,
  userName,
  signaler,
  startTime,
  expireTime
) {
  return {
    serverId,
    IpAddress,
    userName,
    signaler,
    expireTime,
    startTime,
  };
}
//* tabs data
const data = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Expired",
    value: "Expired",
  },
];
//*Active_Tabs_data
const ACTIVE_ROWS = [
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
];
//*Expired TabsData
const EXPIRED_ROWS = [
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "192.168.2.2",
    "Farzin 110101",
    {
      user: "Farzin Afrasiabi",
      userId: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
];

const tableHead = [
  "server Id",
  "Ip Address",
  "Username",
  "signaler",
  "start in",
  "expire in",
  "",
];

const userId = () => {
  return (
    <Layout>
      <div className="w-full px-2 lg:pt-8 ">
        <Tabs value="Active">
          <TabsHeader className="max-w-md ">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className="rounded-xl text-blue-500"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel className="p-0 pt-4 " value={"Active"}>
              <div className="h-full xl:max-h-[70vh] overflow-y-auto">
                <div className="hidden xl:block">
                  <MainTable header={tableHead}>
                    {ACTIVE_ROWS.map((row, index) => {
                      return <ServerDesktopTable active key={index} row={row} />;
                    })}
                  </MainTable>
                </div>
                <div className="block xl:hidden">
                  <ServerMobileTable active data={ACTIVE_ROWS} />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="p-0 pt-4" value={"Expired"}>
              <div className="h-full xl:max-h-[70vh] overflow-y-auto">
                <div className="hidden xl:block">
                  <MainTable header={tableHead}>
                    {EXPIRED_ROWS.map((row, index) => {
                      return <ServerDesktopTable  key={index} row={row} />;
                    })}
                  </MainTable>
                </div>
                <div className="block xl:hidden">
                  <ServerMobileTable  data={EXPIRED_ROWS} />
                </div>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </Layout>
  );
};

export default userId;
