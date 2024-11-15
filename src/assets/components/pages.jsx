import { useEffect, useState } from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function DataComponent() {
  const [ModData, setData] = useState([]);
  //   const pages = 10;
  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  const [page, setPage] = useState(1);
  const TotalEntry = 10;
  const last = page * TotalEntry;
  const first = last - TotalEntry;
  const records = ModData.slice(first, last);
  const totalPage = 10;
  const numbers = [...Array(totalPage + 1).keys()].slice(1);

  function prev() {
    if (page !== 1) {
      setPage(page - 1);
    }
  }

  function next() {
    if (page !== last) {
      setPage(page + 1);
    }
  }
  return (
    <>
      <div className="MainDiv">
        {records.map((el) => (
          <div className="SubDiv" key={el.id}>
            <h1>{el.id}</h1>
            <p>{el.title}</p>
            <p>{el.body}</p>
          </div>
        ))}
      </div>
      <div className="pagi">
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prev}>
              prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item ${page === n ? "active" : " "}`} key={i}>
              <a href="#" className="page-link">
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={next}>
              next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
