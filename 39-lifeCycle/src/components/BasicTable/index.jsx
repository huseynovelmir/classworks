// import { useEffect, useState } from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import "./index.css";

// const BasicTable = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios("https://northwind.vercel.app/api/products").then((res) => {
//       console.log(res.data);

//       setData(res.data);
//     });
//   }, []);
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>name</th>
//             <th>quantityPerUnit</th>
//             <th>unitPrice</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((val) => {
//             return (
//               <tr key={uuidv4()}>
//                 <td>{val.name}</td>
//                 <td>{val.quantityPerUnit}</td>
//                 <td>{val.unitPrice}</td>
//                 <td>
//                   <button
//                     onClick={(e) => {
//                       let arr = data.filter((elem) => elem.id != val.id);
//                       setData(arr);
//                       // axios.delete(
//                       //   `https://northwind.vercel.app/api/products/${val.id}`
//                       // );
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BasicTable;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import Modal from "./components/Modal";

export default function BasicTable() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let editinp = useRef(null);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);

      setData(res.data);
    });
  }, []);
  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, maxWidth: 950, margin: "auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Unity price</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={uuidv4()}>
                <TableCell component="th" scope="row" ref={editinp}>
                  {row.id}
                </TableCell>
                <TableCell align="left" ref={editinp}>
                  {row.name}
                </TableCell>
                <TableCell align="left" ref={editinp}>
                  {row.unitPrice}
                </TableCell>
                <TableCell align="left" ref={editinp}>
                  <button
                    onClick={() => {
                      let arr = data.filter((elem) => elem.id != row.id);
                      setData(arr);
                      // axios.delete(
                      //   `https://northwind.vercel.app/api/products/${row.id}`
                      // );
                    }}
                  >
                    Delete
                  </button>
                </TableCell>
                <TableCell align="left">
                  <button
                    className="edit"
                    onClick={() => setShowModal(!showModal)}
                    // let edittag = data.filter((el) => el.id == row.id);
                    // if (edittag) {
                    // <Modal />;
                    // console.log(123);
                    // } else {
                    // console.log("som");
                    // }
                  >
                    Edit
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
