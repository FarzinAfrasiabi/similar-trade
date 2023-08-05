import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { HiTrash } from "react-icons/hi2";

export default function GiftTable({ rows }) {
  const trashClickHandler = (id) => {
    //* remove item
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Discount Code</TableCell>
            <TableCell align="center">Start in</TableCell>
            <TableCell align="center">Expire In</TableCell>
            <TableCell align="center">Subscription</TableCell>
            <TableCell align="center">Commission</TableCell>
            <TableCell align="center">Number of uses</TableCell>
            <TableCell align="center">Remaining</TableCell>
            <TableCell align="center">Disposable</TableCell>
            <TableCell align="center">Subscribes</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            return (
              <TableRow key={index} className="relative hover:bg-blue-gray-50">
                <td
                  className={`absolute h-full w-2 ${
                    row.Status == "active" ? "bg-yellow-500" : "bg-red-600"
                  }`}
                ></td>
                <TableCell align="center">{row.DiscountCode}</TableCell>
                <TableCell align="center">
                  {new Date(row.startIn).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(row.expireIn).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">{row.Subscription}</TableCell>
                <TableCell align="center" scope="col">
                  {row.Commission}
                </TableCell>
                <TableCell align="center">{row.used}</TableCell>
                <TableCell align="center">{row.remain}</TableCell>
                <TableCell align="center">{row.Disposables}</TableCell>
                <TableCell align="center">{row.Subscribers}</TableCell>
                <TableCell align="center">{row.Status}</TableCell>
                <TableCell align="center">
                  <div className="flex items-center justify-center gap-x-2">
                    <button
                      className="hover:text-red-600 text-xl w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700"
                      onClick={() => trashClickHandler(/** pass id */)}
                    >
                      <HiTrash />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
