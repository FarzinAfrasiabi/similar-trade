import TransactionDesktopTable from "@/components/@section/TranActionDesktoptable";
import TransactionMobileTable from "@/components/@section/TransActionMobileTable";
import MainTable from "@/components/@section/table";
import TransActionsModalContent from "@/components/Transactions/transactionModalContent";
import CustomModals from "@/components/custom/customModal";
import Layout from "@/container/layout";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Textarea,
} from "@material-tailwind/react";
import { TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import { FaDatabase } from "react-icons/fa6";
import { HiBarsArrowDown, HiOutlineArrowTrendingDown } from "react-icons/hi2";

//* for create Data
function createData(
  paymentId,
  type,
  amount,
  method,
  status,
  startTime,
  expireTime
) {
  return {
    paymentId,
    type,
    amount,
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

const tableHeader = [
  "payment Id",
  "Type",
  "Date& Time",
  "Amount",
  "Method",
  "Status",
  "Receipt",
  "",
];

const TransActionById = () => {
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState(null);
  const [openModal, setOpenMOdal] = useState(false);
  const clickHandler = (row) => {
    setRow(row);
    setOpenMOdal(true);
  };
  return (
    <Layout>
      {row && (
        <CustomModals
          openModal={openModal}
          title={"Bank transfer Receipt"}
          handleClose={() => setOpenMOdal(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <TransActionsModalContent
              isStatus={true}
              type={"Status"}
              row={row.status}
            />
            <TransActionsModalContent
              type={"Amount"}
              row={row.ammount}
              icon={<FaDatabase className="text-xl" />}
            />
            <TransActionsModalContent
              icon={<HiBarsArrowDown />}
              type={"type"}
              row={"1224Zh5554sasdg"}
            />
            <TransActionsModalContent
              icon={<HiBarsArrowDown />}
              type={"Date & time"}
              row={row.expireTime}
            />
            <TransActionsModalContent
              type={"Sender address"}
              row={"JHAEIF6374NXY3484748949"}
              icon={<HiBarsArrowDown />}
            />
            <TransActionsModalContent
              type={"Transaction link"}
              row={"JHAEIF6374NXY3484748949"}
              icon={<HiOutlineArrowTrendingDown />}
            />
          </div>
          <div className="my-4 w-full">
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Description"
              className=""
            ></TextField>
          </div>
        </CustomModals>
      )}
      <div className="w-full px-2 lg:pt-8 ">
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
            <TabPanel className="p-0 pt-4" value={"all"}>
              <div>
                <div className="hidden xl:block">
                  <MainTable header={tableHeader}>
                    {ALL_PAYMENT.map((row, index) => {
                      return (
                        <TransactionDesktopTable
                          key={index}
                          row={row}
                          onClick={clickHandler}
                        />
                      );
                    })}
                  </MainTable>
                </div>
                <div className="block xl:hidden">
                  <TransactionMobileTable
                    data={ALL_PAYMENT}
                    onClick={clickHandler}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="p-0 pt-4" value={"paid"}>
              <div className="hidden xl:block">
                <MainTable header={tableHeader}>
                  {PAID_DATA.map((row, index) => {
                    return (
                      <TransactionDesktopTable
                        key={index}
                        row={row}
                        onClick={clickHandler}
                      />
                    );
                  })}
                </MainTable>
              </div>
              <div className="block xl:hidden">
                <TransactionMobileTable
                  data={PAID_DATA}
                  onClick={clickHandler}
                />
              </div>
            </TabPanel>
            <TabPanel className="p-0 pt-4" value={"unpaid"}>
              <div className="hidden xl:block">
                <MainTable header={tableHeader}>
                  {UNPAID_DATA.map((row, index) => {
                    return (
                      <TransactionDesktopTable
                        key={index}
                        row={row}
                        onClick={clickHandler}
                      />
                    );
                  })}
                </MainTable>
              </div>
              <div className="block xl:hidden">
                <TransactionMobileTable
                  data={UNPAID_DATA}
                  onClick={clickHandler}
                />
              </div>
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
