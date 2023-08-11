import RootLayout from "./layout/RootLayout";
import FilterableList from "./pages/Practaice/FilterableList";

function App() {
  return (
    <div className="App">
      <RootLayout>
        <FilterableList />
      </RootLayout>
    </div>
  );
}

export default App;
