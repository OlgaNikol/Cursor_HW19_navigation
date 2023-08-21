import { Post } from '../../components/post/Post';
import avatar from '../../assets/images/avatar.jpg';
import bird from '../../assets/images/bird.png.webp';
import ibexes from '../../assets/images/ibexes.jpg.webp';

const Posts = () => {
    const data = [
        {
            author: {
                name: "Nadine Yousif",
                photo: {avatar},
                nickname: "@nadin_yus"
            },
            content: "A self-taught photographer has come face-to-face with a kestrel swooping towards him.",
            image: {img: bird},
            date: "26th february"
        },
        {
            author: {
                name: "Nadine Yousif",
                photo: {avatar},
                nickname: "@nadin_yus"
            },
            content: "For Nubian Ibexes, the high-altitude rocky terrains are home.\n" +
                "\n" +
                "Displays of dominance begin with showing off their impressive horns, captured in this shot by Amit Eshel in the Zin Desert, Israel.",
            image: {img: ibexes},
            date: "16th march"
        }
    ]

    return <>
        <Post author={data[0].author}
              content={data[0].content}
              image={data[0].image}
              date={data[0].date}
        />
        <Post author={data[1].author}
              content={data[1].content}
              image={data[1].image}
              date={data[1].date}
        />
    </>
}

export default Posts;