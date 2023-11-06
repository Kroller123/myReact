import UsersContainer from "./componets/UsersContainer/UsersContainer";
import CommentsContainer from "./componets/CommentsContainer/CommentsContainer";

function App() {
  return (
    <div style={{display:'flex' }}>
        <UsersContainer/>
        <CommentsContainer/>
    </div>
  );
}

export default App;
