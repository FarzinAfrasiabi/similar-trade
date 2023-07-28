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
  HiOutlineClipboardDocument,
} from "react-icons/hi2";
import { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import TransActionsRows from "./transactionRow";

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
            pendingServer ? "bg-blue-800" : "bg-yellow-500"
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
        <TableCell component="th" scope="row">
          {row.serverId}
        </TableCell>
        <TableCell align="right">{row.IpAddress}</TableCell>
        <TableCell align="right">{row.userName}</TableCell>
        <TableCell align="right" className="flex flex-col gap-y-2 text-sm">
          <span>{row.signaler.user}</span>
          <span className="text-gray-500">{row.signaler.userId}</span>
        </TableCell>
        <TableCell align="right" className="space-x-4 space-y-2">
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
              <button className="p-2 px-6 rounded-lg shadow-md text-sm bg-gray-300 ">
                <span className="flex items-center gap-x-2 ">
                  A12154ar234wef{" "}
                  <HiOutlineClipboardDocument className="text-2xl text-gray-700" />
                </span>
              </button>
            </CopyToClipboard>
          ) : (
            <button
              type="button"
              className="p-2 px-6 rounded-lg shadow-md text-sm bg-gray-300 "
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
      <TableRow className="relative">
        <th className="absolute left-0 w-2 h-full bg-yellow-400"></th>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
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
                      {row.startTime}
                    </TableCell>
                    <TableCell>{row.expireTime}</TableCell>
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
    <div className="w-full overflow-hidden">
      <TableContainer component={Paper} sx={{ maxHeight: "90vh" }}>
        <Table aria-label="collapsible table">
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
    </div>
  );
}
