// import { useEffect, useState } from "react";

// const useSendMail = (body) => {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [response, setResponse] = useState(null);
//   const serverUrl = "http://localhost:5000/api/sendmail";

//   const abortController = new AbortController();
//   useEffect(() => {
//     fetch(serverUrl, {
//       method: "POST",
//       body: body,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       signal: abortController.signal,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// };

// export default useSendMail;
