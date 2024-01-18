import  { useEffect, useState } from "react";
const CONTEXT_KEY = "77a30335bb5194dc6";
const useGoogleSearch = (term) => {
  const [Data, setData] = useState();
  // console.log(Data);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [term]);

  return { Data };
};

export default useGoogleSearch;
