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
    label: "All Payment",
    value: "all",
  },
  {
    label: "Paid",
    value: "paid",
  },
  {
    label: "Unpaid",
    value: "unpaid",
  },
];
//*paid data
const PAID_DATA = [
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
//*unPaid TabsData
const UNPAID_DATA = [
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
    "Rank",
    "unpaid",
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
  createData(
    "#134156454",
    "Signal Subscriptions",
    "10200$",
    "Rank",
    "unpaid",
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
];

// * all paid data

const ALL_PAYMENT = [...PAID_DATA, ...UNPAID_DATA];

const TransActionById = () => {
  return (
    <Layout>
      <div className="w-full px-2 ">
        <Tabs value="all">
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
            <TabPanel value={"all"}>
              <CollapsibleTable rows={ALL_PAYMENT}>
                <TableHeaders />
              </CollapsibleTable>
            </TabPanel>
            <TabPanel value={"paid"}>
              <CollapsibleTable rows={PAID_DATA}>
                <TableHeaders />
              </CollapsibleTable>
            </TabPanel>
            <TabPanel value={"unpaid"}>
              <CollapsibleTable rows={UNPAID_DATA}>
                <TableHeaders />
              </CollapsibleTable>
            </TabPanel>
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
        <TableCell align="center">Type</TableCell>
        <TableCell align="center">Status</TableCell>
        <TableCell align="center">Ammount</TableCell>
        <TableCell align="center">Method</TableCell>
        <TableCell align="center">Recipe</TableCell>
      </TableRow>
    </TableHead>
  );
};
