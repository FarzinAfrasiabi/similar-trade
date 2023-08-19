import { calcDate } from "@/utils/Date";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";

const TransActionPrintPage = ({ row }) => {
  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 1000);
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto container py-4">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Payment Id</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Start Time</TableCell>
              <TableCell align="center">Expire Time</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.paymentId}
              </TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{calcDate(row.startTime)}</TableCell>
              <TableCell align="center">{calcDate(row.expireTime)}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.ammount}</TableCell>
              <TableCell align="center">{row.method}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransActionPrintPage;

{
  /* <table className="border-collapse border border-gray-500">
  <thead>
    <th>Payment Id</th>
    <th>Type</th>
    <th>Start Time</th>
    <th>Expire Time</th>
    <th>Status</th>
    <th>Amount</th>
    <th>Method</th>
  </thead>
  <tbody>
    <tr>
      <td>{row.paymentId}</td>
      <td>{row.type}</td>
      <td>{}</td>
      <td>{calcDate(row.expireTime)}</td>
      <td>{row.status}</td>
      <td>{row.ammount}</td>
      <td>{row.method}</td>

    </tr>
  </tbody>
</table> */
}
