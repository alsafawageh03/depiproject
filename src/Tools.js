import { useEffect, useState } from "react";
import "./Tools.css";

export default function Search() {
  let [tools, setTools] = useState([]);
  let [selected, setSelected] = useState("0");
  let [input, setInput] = useState("");

  // جلب البيانات من API
  useEffect(() => {
    fetch("http://localhost:9000/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      })
      .catch((error) => {
        console.error("Error fetching tools:", error);
      });
  }, []);

  // منطق البحث
  function search(items) {
    return items.filter((item) =>
      item[selected]?.toString().toLowerCase().includes(input.toLowerCase())
    );
  }
  const filteredTools = search(tools);

  return (
    <div className="Tools ml-4">
      <form
        className="d-flex align-items-center justify-content-center"
        role="search"
      >
        <h2 className="me-2">Search with</h2>
        <select
          className="me-2"
          onChange={(e) => setSelected(e.target.value)}
          aria-label="Filter Tools by..."
        >
          <option value="id">ID</option>
          <option value="name">Title</option>
        </select>
        <input
          className="me-2"
          type="search"
          placeholder={
            selected === "id"
              ? "Search With ID"
              : selected === "name"
              ? "Search With Title"
              : "Search"
          }
          aria-label="Search Tools"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <table className="table table-striped mt-5 p-5" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Count</th>
            <th>Status</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {filteredTools.length > 0 ? (
            filteredTools.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.img}</td>
                <td>{el.count}</td>
                <td>{el.status}</td>
                <td>{el.lastModified}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No Results Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
