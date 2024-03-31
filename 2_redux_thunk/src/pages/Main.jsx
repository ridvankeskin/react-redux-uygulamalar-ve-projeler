import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setProducts,
} from "../redux/actions/productActions";
setLoading;
const Main = () => {
  // dispatch methodu kurulumu
  const dispatch = useDispatch();

  // PRODUCTrEDUCER A ABONE OLMAK VE İÇERİSİNDEKİ VERİLERE ERİŞ
  const { isLoading, error, products } = useSelector(
    (store) => store.productReducer
  );

  // api dan verileri al ve store a aktar
  useEffect(() => {
    dispatch(setLoading());
    axios
      .get(`http://localhost:4000/products`)
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Yükleniyor</h1>
      ) : error ? (
        <h1> {error} </h1>
      ) : (
        products.map(() => <h2>ÜRÜN</h2>)
      )}
    </div>
  );
};

export default Main;
