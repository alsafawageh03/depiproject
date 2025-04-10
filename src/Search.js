import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tools = () => {
  const [tools, setTools] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  const [filteredTools, setFilteredTools] = useState([]);
  const [selected, setSelected] = useState("id");
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:9000/tools")
      .then((response) => response.json())
      .then((data) => {
        setTools(data);
        setFilteredTools(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = () => {
    const query = input.toLowerCase();
    const filtered = tools.filter(
      (tool) =>
        (selected === "id" && tool.id.toString().includes(query)) ||
        (selected === "name" && tool.name.toLowerCase().includes(query))
    );
    setFilteredTools(filtered);
  };

  const handleReset = () => {
    setInput("");
    setFilteredTools(tools);
  };

  return (
    <div className="Tools ml-4">
      <form
        className="container-fluid p-4 rounded shadow bg-light"
        role="search"
      >
        <div className="row mb-3">
          <div className="col-12 text-center">
            <h2 className="mb-4">Search Tools</h2>
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-12 col-md-3">
            <label htmlFor="filter" className="form-label">
              Search By:
            </label>
          </div>
          <div className="col-12 col-md-9">
            <select
              className="form-select"
              onChange={(e) => setSelected(e.target.value)}
              aria-label="Filter Tools by..."
              id="filter"
            >
              <option value="id">ID</option>
              <option value="name">Title</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-3">
            <label htmlFor="searchInput" className="form-label">
              Enter Query:
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input
              className="form-control"
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
              id="searchInput"
            />
          </div>
        </div>

        <div className="row text-center">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <button
              className="btn btn-primary w-100"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="col-12 col-md-6">
            <button
              className="btn btn-secondary w-100"
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </form>

      <table className="table table-striped mt-5 p-5" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Count</th>
            <th>Status</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {filteredTools.length > 0 ? (
            filteredTools.map((el) => (
              <tr key={el.id} onClick={() => navigate(`/tool/${el.id}`)}>
                <td>{el.id}</td>
                <td>{el.name}</td>
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
};

export default Tools;
