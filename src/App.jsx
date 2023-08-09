import RootLayout from "./layout/RootLayouta";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <RootLayout>
        {/* <Home /> */}
        <About />
      </RootLayout>
    </div>
  );
}

export default App;
