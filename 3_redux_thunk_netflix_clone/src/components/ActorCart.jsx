import { baseImgUrl } from "../constants";

const ActorCart = ({ actor }) => {
  return (
    <div className="w-[150px] line-clamp-1">
      <img className="h-[175px]" src={baseImgUrl + actor.profile_path} alt="" />

      <h2>{actor.original_name}</h2>
      <h2 className="line-clamp-1">{actor.character}</h2>
    </div>
  );
};

export default ActorCart;
