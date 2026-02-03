import "./HotNews.css"

const imgUrl = "https://media.revistagq.com/photos/628cbc83612b11d7ae6cf3e9/master/w_1024%2Cc_limit/slow-horses.png"

export const HotNews = () => {
    return (
        <div className="yellow-div">
            <div className="black-div">
                <img src={imgUrl} alt="" />
                <h3> Hot News</h3>
                <p>"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.</p>
                <p>The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.</p>
                <p>Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series.</p>
                <div>
                    <p>25 July</p>
                    <p>1/6</p>
                </div>
            </div>
        </div>
    );
}