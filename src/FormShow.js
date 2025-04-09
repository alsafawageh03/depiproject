// export default function FormShow(props) {
//     return (
//       <div className="show">
//         <div>
//           <img src={props.img} alt="" />
//           <h6 className="align-items-center">name</h6>
//           <p>Status: {props.status}</p>
//           <p>description: {props.desc}</p>
//         </div>
//         <button>close</button>
//       </div>
//     );
//   }

// import { useState } from "react";

// export default function FormShow({ items, onClose }) {
//   let [show, setShow] = useState(true);

//   if (!show) return null; // Prevent rendering if `show` is false.
//   return (
//     <div
//       className="container w-50 h-100 flex justify-content-center align-items-center shadow p-4 mb-5 bg-white rounded"
//       onChange={show}
//     >
//       <div className="flex justify-content-center align-items-center align-middle">
//         <img
//           src="https://www.ciamedical.com/insights/content/uploads/2016/02/ss2.png"
//           alt=""
//         />

//         <p className="align-items-center">name:{items.name}</p>
//         <p>Status: xxxxxx</p>
//         <p>description: xxxxxxx </p>
//         <div className="align">
//           <button
//             onClick={() => {
//               setShow(false);
//               onClose;
//             }}
//           >
//             close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function FormShow({ items, onClose }) {
  const [show, setShow] = useState(true);

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

        <p className="mb-1">Name: {items?.name || "Unknown"}</p>
        <p className="mb-1">Status: {items?.status || "No Status"}</p>
        <p className="mb-3">
          Description: {items?.description || "No Description"}
        </p>

        <button
          className="btn btn-danger"
          onClick={() => {
            setShow(false); // إخفاء المكون
            if (onClose) onClose(); // استدعاء دالة الإغلاق إذا كانت موجودة
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
