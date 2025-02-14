import Loading from "../../components/loading/Loading";
import UseFetch from "../../hooks/UseFetch"
import "./style.css"
import { IoIosAlbums } from "react-icons/io";
type Album = {
    userId: number,
    id: number,
    title: string
}

function Albums() {
    const { data: album, error, isLoading } = UseFetch<Album[]>("https://jsonplaceholder.typicode.com/albums")
    return (
        <>
            {isLoading && <Loading />}
            {error && <div className="error">
                <p style={{ color: "red" }}>{error}</p>
            </div>}

            <div className="albums">
                {
                    album?.map((album) => (
                        <div className="albums_item">
                            <IoIosAlbums style={{ fontSize: "130px" }} />
                            <h1 style={{ fontSize: "20px", textAlign: "center", color: "white" }}>{album.title} </h1>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Albums
