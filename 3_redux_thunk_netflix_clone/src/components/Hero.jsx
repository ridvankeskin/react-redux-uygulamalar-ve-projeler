import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";

const Hero = () => {
  const { isLoading, error, movies } = useSelector((store) => store.movies);

  // 0 - 19 arasında rastgele sayı üret
  const i = Math.floor(Math.random() * 20);

  // rastgele üretilen sıradaki elemana eriş
  const movie = movies[i];
  console.log(movie);
  return (
    <div>
      {!movie ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-start"> {movie.overview} </p>
            <p>
              <span>IMDB:</span>
              <span className="text-yellow-400 ms-2 font-semibold">
                {" "}
                {movie.vote_average}{" "}
              </span>
            </p>
            <div className="flex gap-5">
              <button className="p-2 bg-red-600 rounded hover:bg-red-700">
                Filmi İzle
              </button>
              <button className="p-2 bg-blue-600 rounded hover:bg-blue-700">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div></div>
        </>
      )}
    </div>
  );
};

export default Hero;
