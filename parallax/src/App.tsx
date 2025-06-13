import Header from "./components/header";
import Parallax from "./components/parallax";
import Texto from "./components/texto";
function App() {
  return (
    <>
      <Header />
      <Parallax />
      <div className="relative h-screen bg-[#003329] p-24 mt-40">

      <Texto />
      </div>
    </>
  );
}

export default App;
