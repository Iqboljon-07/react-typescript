
import Loading from "../../components/loading/Loading";
import UseFetch from "../../hooks/UseFetch"
import "./style.css"
import { TbHttpPost } from "react-icons/tb";
interface Post {
    userId: number
    id: number,
    title: string,
    body: string

}

function Posts() {

    const { data: post, error, isLoading } = UseFetch<Post[]>("https://jsonplaceholder.typicode.com/posts")
    return (
        <>
            {isLoading && <Loading />}
            {error && <div className="error">

                <p>{error} </p></div>}
            <div className="posts">
                {

                    post?.map((post) => (
                        <div key={post.id} className="posts_item">
                            <TbHttpPost style={{ color: "#ffffff", fontSize: "120px" }} />
                            <h1 style={{ textAlign: "center", fontSize: "18px" }}> {post.title} </h1>

                        </div>

                    ))

                }
            </div>
        </>
    )
}

export default Posts
