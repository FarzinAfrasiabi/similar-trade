import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineCalendar,
  HiOutlineClipboardDocument,
  HiOutlineClock,
} from "react-icons/hi2";
import { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import TransActionsRows from "./transactionRow";
import { calcDate } from "@/utils/Date";
import TransActionPrintPage from "../print/transactionprint";

function Row(props) {
  const { row, pendingServer = false } = props;
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <React.Fragment>
      <TableRow
        className="relative transition-all ease-in-out duration-150"
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <th
          className={`absolute left-0 w-2 h-full ${
            pendingServer ? "bg-yellow-600" : "bg-yellow-500"
          }`}
        ></th>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiChevronUp /> : <HiChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.serverId}</TableCell>
        <TableCell align="right">{row.IpAddress}</TableCell>
        <TableCell align="right">{row.userName}</TableCell>
        <TableCell align="right" className="">
          <span>{row.signaler.user}</span>
          <br />
          <span className="text-gray-500">{row.signaler.userId}</span>
        </TableCell>
      </TableRow>
      <TableRow className="relative">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <span className="absolute left-0 w-2 h-full bg-yellow-400"></span>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>start</TableCell>
                    <TableCell>expiredTime</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-x-1">
                        <span className="text-2xl text-gray-600">
                          <HiOutlineCalendar />
                        </span>
                        <span>{calcDate(row.startTime)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-x-2">
                        <span>
                          <HiOutlineClock className="text-2xl text-gray-600" />
                        </span>
                        <span>{calcDate(row.expireTime)}</span>
                      </div>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="space-x-4 space-y-2 "
                    >
                      {showPassword ? (
                        <CopyToClipboard
                          text={"A12154ar234wef"}
                          onCopy={() => {
                            toast.success("Copied to clipBoard");
                            setTimeout(() => {
                              setShowPassword(false);
                            }, 2000);
                          }}
                        >
                          <button className="p-2 px-6 rounded-lg shadow-md text-xs bg-gray-300   text-center ">
                            <span className="flex items-center gap-x-2 ">
                              A12154ar234wef{" "}
                              <HiOutlineClipboardDocument className="text-xl text-gray-700" />
                            </span>
                          </button>
                        </CopyToClipboard>
                      ) : (
                        <button
                          type="button"
                          className="p-2  px-6 rounded-lg shadow-md text-sm bg-gray-300  text-center "
                          onClick={() => setShowPassword(true)}
                        >
                          Password
                        </button>
                      )}

                      <button
                        type="button"
                        className="p-2 px-6 rounded-lg shadow-md text-sm bg-gray-300"
                      >
                        VNS
                      </button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({
  rows,
  children,
  pendingServer = false,
}) {
  return (
    <>
      <TableContainer component={Paper} className="w-full max-w-full  overflow-auto">
        <Table sx={{minWidth : 650}} aria-label="collapsible table">
          {children}
          <TableBody>
            {rows.map((row, index) => {
              if (pendingServer) {
                return (
                  <Row pendingServer={pendingServer} key={index} row={row} />
                );
              }
              return <TransActionsRows key={index} row={row} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
