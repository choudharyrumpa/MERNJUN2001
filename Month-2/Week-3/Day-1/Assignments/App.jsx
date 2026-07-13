import GetData from "./GetData";
import DeleteData from "./DeleteData";
import PostData from "./PostData";
import UpdateData from "./UpdateData";
import "./App.css";

function App() {
  return (
    <main>
      <PostData />
      <UpdateData />
      <DeleteData />
      <GetData />
    </main>
  )
}

export default App
