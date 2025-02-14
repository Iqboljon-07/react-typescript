import Loading from "../../components/loading/Loading";
import UseFetch from "../../hooks/UseFetch"
import "./style.css"
import { FaCircleUser } from "react-icons/fa6";
type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: number
};
function Users() {
  const { data: users, isLoading, error } = UseFetch<User[]>("https://jsonplaceholder.typicode.com/users")


  return (
    <>
      {isLoading && <Loading />}
      {error && <div className="error">
        <p style={{ color: "red" }}>{error}</p>
      </div>}
      <div className="users">




        {users?.map((user) => (
          <div className="users_item" key={user.id}>
            <FaCircleUser style={{ fontSize: "120px", color: "gray" }} />
            <h1 style={{ fontSize: "24px" }}>{user.name} </h1>
            <p>{user.email}</p>
            <b>{user.phone} </b>


          </div>


        ))}

      </div>
    </>

  )
}

export default Users
