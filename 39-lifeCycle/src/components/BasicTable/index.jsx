import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const BasicTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);

      setData(res.data);
    });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>quantityPerUnit</th>
            <th>unitPrice</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            return (
              <tr key={uuidv4()}>
                <td>{val.name}</td>
                <td>{val.quantityPerUnit}</td>
                <td>{val.unitPrice}</td>
                <td>
                  <button
                    onClick={(e) => {
                      let arr = data.filter((elem) => elem.id != val.id);
                      setData(arr);
                      // axios.delete(
                      //   `https://northwind.vercel.app/api/products/${val.id}`
                      // );
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
