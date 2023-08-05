import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import { HiEye } from "react-icons/hi2";

/**tickeId,
  startin,
  department,
  subject,
  RelatedService,
  LastReply,
  status,
  action */

const TicketTable = ({ rows  , isAction = false}) => {
  return (
    <TableContainer sx={{ minWidth: 650, overflow: "scroll" }}>
      <Table>
        {isAction ? <></> : <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Ticket id </TableCell>
            <TableCell align="center">start in</TableCell>
            <TableCell align="center">Department </TableCell>
            <TableCell align="center">Subjec </TableCell>
            <TableCell align="center">Related Service </TableCell>
            <TableCell align="center">Last Reply</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>}
        <TableBody>
          {rows.map((row, index) => {
            return (
              <TableRow key={index} className="relative hover:bg-blue-gray-50" >
                <td
                  className={`absolute h-full w-2 ${
                    row.status === "Progressing"
                      ? "bg-orange-500"
                      : row.status === "Open"
                      ? "bg-blue-400"
                      : row.status === "Closed"
                      ? "bg-red-600"
                      : "bg-green-600"
                  }`}
                ></td>
                <TableCell align="center">{row.tickeId}</TableCell>
                <TableCell align="center">
                  {new Date(row.startin).toLocaleDateString()}
                </TableCell>
                <TableCell align="center" className="text-red-600">
                  {row.department}
                </TableCell>
                <TableCell align="center" scope="col" className="text-red-600">
                  {row.subject}
                </TableCell>
                <TableCell align="center">{row.RelatedService}</TableCell>
                <TableCell align="center">
                  {/* {new Date(row.LastReply).toLocaleDateString()} */}
                  5min ago
                </TableCell>
                <TableCell align="center">
                  <button
                    className={`py-1 w-[100px] rounded-md ${
                      row.status === "Progressing"
                        ? "bg-orange-500 bg-opacity-30 text-orange-700 hover:bg-opacity-100 hover:text-white transition-all ease-in-out duration-150"
                        : row.status === "Open"
                        ? "bg-blue-400 bg-opacity-30 text-blue-500 hover:bg-opacity-100 hover:text-white transition-all ease-in-out duration-150"
                        : row.status === "Closed"
                        ? "bg-red-600 bg-opacity-30 text-red-600 hover:bg-opacity-100 hover:text-white transition-all ease-in-out duration-150"
                        : "bg-green-600 bg-opacity-30 text-green-600 hover:bg-opacity-100 hover:text-white transition-all ease-in-out duration-150 "
                    }`}
                  >
                    {row.status}
                  </button>
                </TableCell>
                {isAction ? <></> : <TableCell align="center">
                  <div className="flex items-center gap-x-2">
                    <Link
                      href={`/chats/${index+1}`}
                      className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center"
                    >
                      <HiEye />
                    </Link>
                    {row.status === "Closed" ? (
                      <button className="p-1 bg-white shadow rounded-md px-2 text-sm">
                        Open Ticket
                      </button>
                    ) : (
                      <button className="p-1 bg-white shadow rounded-md px-2 text-sm">
                        Close ticket
                      </button>
                    )}
                  </div>
                </TableCell>}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TicketTable;
