import CollapsibleTable from "@/components/table/CollapseTable";
import Layout from "@/container/layout";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { TableCell, TableHead, TableRow } from "@mui/material";

//* for create Data
function createData(
  paymentId,
  type,
  ammount,
  method,
  status,
  startTime,
  expireTime
) {
  return {
    paymentId,
    type,
    ammount,
    method,
    status,
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
    "Signal Subscriptions",
    "10200$",
    "Rank",
    "unpaid",
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "Signal Subscriptions",
    "10200$",
    "Crypto",
    "Decliend",
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "Signal Subscriptions",
    "10200$",
    "Rank",
    "progressing",
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "Signal Subscriptions",
    "10200$",
    "Rank",
    "Complete",
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
      TransActionById: "@farzinafrasiabi",
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
      TransActionById: "@farzinafrasiabi",
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
      TransActionById: "@farzinafrasiabi",
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
      TransActionById: "@farzinafrasiabi",
    },
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
];
const TransActionById = () => {
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
              <CollapsibleTable rows={ACTIVE_ROWS}>
                <TableHeaders />
              </CollapsibleTable>
            </TabPanel>
            {/* <TabPanel value={"Expired"}>
              <CollapsibleTable rows={EXPIRED_ROWS}>
                <TableHeaders />
              </CollapsibleTable>
            </TabPanel> */}
          </TabsBody>
        </Tabs>
      </div>
    </Layout>
  );
};

export default TransActionById;

const TableHeaders = () => {
  return (
    <TableHead>
      <TableRow className="bg-gray-300">
        <TableCell />
        <TableCell />
        <TableCell>Payment Id</TableCell>
        <TableCell align="right">Type</TableCell>
        <TableCell align="right">Status</TableCell>
        <TableCell align="right">Ammount</TableCell>
        <TableCell align="right">Method</TableCell>
        <TableCell align="right">Recipe</TableCell>
      </TableRow>
    </TableHead>
  );
};
