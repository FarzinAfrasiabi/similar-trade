import CollapsibleTable from "@/components/table/CollapseTable";
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
const userId = () => {
  return (
    <Layout>
      <div className="w-full px-2 ">
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
            <TabPanel value={"Active"}>
              <CollapsibleTable rows={ACTIVE_ROWS} />
            </TabPanel>
            <TabPanel value={"Expired"}>
              <CollapsibleTable rows={EXPIRED_ROWS} />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </Layout>
  );
};

export default userId;
