import Buttons from "./components/Buttons";
import UseButton from "./hook/UseButton";
import UseFetch from "./hook/UseFetch";

function App() {
  const [hideWord, showWord, toggleWord, show] = UseButton();
  const [data] = UseFetch("https://northwind.vercel.app/api/products");
  return (
    <>
      <p>{show && "Saaaaallaaammm"}</p>
      <Buttons
        hideWord={hideWord}
        showWord={showWord}
        toggleWord={toggleWord}
      />
      {data.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </>
  );
}

export default App;
