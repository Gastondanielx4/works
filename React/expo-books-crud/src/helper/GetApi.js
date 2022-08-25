/* import { helpHttp } from "../helper/helpHttp";

export const apiGet = (url, options, setArray, setError, setLoading) => {
  helpHttp()
    .get(url, options)
    .then((res) => {
      if (!res.err) {
        let arrayWithoutFilter = res.books;
        setArray(arrayWithoutFilter);
        setError(null);
        return;
      } else {
        setArray("");
        setError(res);
      }
      setLoading(false);
    });
};
 */
