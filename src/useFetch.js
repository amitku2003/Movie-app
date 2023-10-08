import React from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

// function useFetch(url_path) {
//     const [movie, setMovie] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const URL = `${API_URL}${url_path}`;
//         console.log(URL);
//         setLoading(true);
//         axios.get(URL).then((response) => {
//             const data = response.json();
//             setMovie(data);
//         }).catch((err) => {
//             setError(err);
//         }).finally(() => {
//             setLoading(false);
//         })
//     }, [url_path]);
//     return { loading, movie, error };
// }

const useFetch = (url, options, deps = []) => {
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState({ show: "False", msg: "" });
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const URL = `${API_URL}${url}`;
    console.log(URL);
    const fetchData = async () => {
      try {
        const res = await fetch(URL, options);
        const json = await res.json();
        console.log(json);
        if(json.Response === "True") {
          setResponse(json);
          setError({ show: "False", msg: "" });
          setLoading(false);
        }else{
          setError({ show: "True", msg: json.Error });
          console.log(error);
        }
      } catch (error) {}
    };
    setLoading(true);
    url && fetchData();
  }, deps);
  return { response, loading, error };
};

export default useFetch;