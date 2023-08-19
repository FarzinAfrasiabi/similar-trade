import React, { useRef } from "react";
import {
  HiBarsArrowDown,
  HiEye,
  HiFolderArrowDown,
  HiOutlineArrowTrendingDown,
  HiOutlineCalendar,
  HiOutlineClock,
  HiPrinter,
} from "react-icons/hi2";
import ReactToPrint from "react-to-print";
import CustomModals from "../custom/customModal";
import TransActionsModalContent from "../Transactions/transactionModalContent";
import { FaDatabase, IconName } from "react-icons/fa6";
import { calcDate } from "@/utils/Date";
import { Textarea } from "@material-tailwind/react";
import TransActionPrintPage from "../print/transactionprint";
import { useRouter } from "next/router";
const {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
} = require("@mui/material");
const { Fragment, useState } = require("react");
const { HiChevronUp, HiChevronDown } = require("react-icons/hi");

function TransActionsRows(props) {
  const { row } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [openModal, setOpenMOdal] = useState(false);
  const clickHandler = () => {
    setOpenMOdal(true);
  };

  return (
    <Fragment>
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
        <div className="my-4">
          <Textarea label="Description" className=""></Textarea>
        </div>
      </CustomModals>
      <TableRow
        className="relative  transition-all ease-in-out duration-150"
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <th
          className={`absolute left-0 w-2 h-full ${
            row.status === "unpaid"
              ? "bg-orange-500"
              : row.status === "progressing"
              ? "bg-blue-500"
              : row.status === "Decliend"
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        ></th>
        <TableCell>
          <button
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiChevronUp /> : <HiChevronDown />}
          </button>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.paymentId}
        </TableCell>
        <TableCell className="text-red-600  text-sm" align="center">
          {row.type}
        </TableCell>
        <TableCell align="center">{row.ammount}</TableCell>
        <TableCell align="center" className="text-red-600  text-sm">
          {row.method}
        </TableCell>
        <TableCell align="center">
          <button
            type="button"
            className={`p-1 text-sm w-24 rounded-md font-medium ${
              row.status === "unpaid"
                ? "bg-orange-100 text-orange-700"
                : row.status === "progressing"
                ? "bg-blue-100 text-blue-600 "
                : row.status === "Decliend"
                ? "bg-red-100 text-red-600 "
                : "bg-green-100 text-green-600"
            }`}
          >
            {row.status}
          </button>
        </TableCell>
        <TableCell>
          <div className="flex flex-col xl:flex-row items-center gap-y-2 gap-x-3 justify-end">
            {row.status === "unpaid" && (
              <button className="py-2 px-2 rounded-xl text-sm ring-1 ring-gray-300 hover:bg-gray-600 hover:text-gray-200 transition-all ease-out duration-150">
                <span>Pay Invoice</span>
              </button>
            )}
            <div className="flex items-center gap-x-2">
              <ButtonACtions onClick={() => clickHandler(row)}>
                <HiEye className="text-xl" />
              </ButtonACtions>
              <ButtonACtions
                onClick={() => {
                  router.push("/print/123");
                  // onRow(row);
                }}
              >
                <HiPrinter className="text-xl" />
              </ButtonACtions>
              <div className="hidden xl:block">
                <ButtonACtions>
                  <HiFolderArrowDown className="text-xl hidden lg:block" />
                </ButtonACtions>
              </div>
            </div>
          </div>
        </TableCell>
      </TableRow>
      <TableRow className="relative">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <span
              // sx={{position : 'absolute' , width :'2px'}}
              className={`absolute  w-2 flex h-full left-0 ${
                row.status === "unpaid"
                  ? "bg-orange-500"
                  : row.status === "progressing"
                  ? "bg-blue-500"
                  : row.status === "Decliend"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            ></span>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>start</TableCell>
                    <TableCell>expiredTime</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <div className="flex items-center gap-x-1">
                        <span className="text-2xl text-gray-600">
                          <HiOutlineCalendar />
                        </span>
                        <span>{calcDate(row.startTime)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-x-1">
                        <span className="text-2xl text-gray-600">
                          <HiOutlineClock />
                        </span>
                        <span>{calcDate(row.expireTime)}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
export default TransActionsRows;

function ButtonACtions({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-8 h-8 rounded-full ring-1  ring-gray-400 flex items-center justify-center hover:bg-gray-600 hover:text-gray-100 transition-all ease-in-out duration-150"
    >
      {children}
    </button>
  );
}
