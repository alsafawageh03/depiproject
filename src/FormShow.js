import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FormShow({ onClose }) {
  const [show, setShow] = useState(true);
  const [tool, setTool] = useState();
  const parameter = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/tools/${parameter.id}`)
      .then((response) => response.json())
      .then((data) => {
        setTool(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [parameter.id]);

  // إيقاف عرض المكون إذا كانت الحالة `show` غير مفعلة
  if (!show) return null;

  return (
    <div className="container w-50 h-100 d-flex justify-content-center align-items-center shadow p-4 mb-5 bg-white rounded">
      <div className="text-center">
        <img
          src="https://www.ciamedical.com/insights/content/uploads/2016/02/ss2.png"
          alt="Preview"
          className="img-fluid mb-3"
        />

        <p className="mb-1">Name: {tool?.name || "Unknown"}</p>
        <p className="mb-1">Status: {tool?.status || "No Status"}</p>
        <p className="mb-3">
          Description: {tool?.description || "No Description"}
        </p>

        <button
          className="btn btn-danger"
          onClick={() => {
            setShow(false); // إخفاء المكون
            if (onClose) onClose(); // استدعاء دالة الإغلاق إذا كانت موجودة
            navigate("/search");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
