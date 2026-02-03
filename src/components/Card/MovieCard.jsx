import "./MovieCard.css"
const imgUrl = "https://i.pinimg.com/1200x/91/2e/c4/912ec4ce3e849af177890a23e0100019.jpg";
import star  from "../../assets/star.svg";
import heart  from "../../assets/heart.svg"

export const MovieCard = () => {
    return (
        <div className="card">
            <div className="card-body nebo nebo--tr ">
                <img src={imgUrl} alt="" />
                <span className="raiting">
                    <img src={star} alt="" />
                    <span>7.0</span>
                    <span className="grey-rait">/10</span>
                </span>
                <div className="card-footer">
                    <h4>Hotel Transylvania</h4>
                    <p>Animation, comedy</p>
                </div>
            </div>


            <div className="like-button">
                <img src={heart} alt="" />
            </div>
        </div>
    )
}
