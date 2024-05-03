import Form from "./components/Form";
import UseFetch from "./hook/UseFetch";

function App() {
  const [data, loading, setLoading] = UseFetch(
    "https://northwind.vercel.app/api/products"
  );
  return (
    <>
      <Form data={data} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((el) => <p key={el.id}>{el.name}</p>)
      )}
    </>
  );
}

export default App;
