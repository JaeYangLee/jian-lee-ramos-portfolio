import "./index.css";
import MyPortfolioPageOne from "./pages/MyPortfolioPageOne";
import MyPortfolioPageTwo from "./pages/MyPortfolioPageTwo";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <section>
          <MyPortfolioPageOne />
        </section>
        <section>
          <MyPortfolioPageTwo />
        </section>
      </div>
    </>
  );
}

export default App;
