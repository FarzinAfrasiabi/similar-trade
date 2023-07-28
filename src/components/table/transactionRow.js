import { HiEye, HiFolderArrowDown, HiPrinter } from "react-icons/hi2";
import Modal from "@mui/material/Modal";
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

function TransaxtionRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [openModal, setOpenMOdal] = useState(false);
  const clickHandler = () => {
    setOpenMOdal(false);
  };
  return (
    <Fragment>
      <Modal
        open={openModal}
        onClose={() => setOpenMOdal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <span>this is modal</span>
      </Modal>
      <TableRow
        className="relative transition-all ease-in-out duration-150"
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
            className={`p-2 w-24 rounded-md font-semibold ${
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
          <div className="flex items-center gap-x-3 justify-end">
            {row.status === "unpaid" && (
              <button className="p-2 rounded-2xl text-sm ring-1 ring-gray-300">
                <span>Pay Invoice</span>
              </button>
            )}
            <ButtonACtions onClick={clickHandler}>
              <HiEye className="text-xl" />
            </ButtonACtions>
            <ButtonACtions>
              <HiPrinter className="text-xl" />
            </ButtonACtions>
            <ButtonACtions>
              <HiFolderArrowDown className="text-xl" />
            </ButtonACtions>
          </div>
        </TableCell>
      </TableRow>
      <TableRow className="relative">
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
    </Fragment>
  );
}
export default TransaxtionRow;

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
