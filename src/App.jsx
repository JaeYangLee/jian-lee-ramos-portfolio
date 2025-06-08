import "./index.css";
import MyPortfolioPageOne from "./pages/MyPortfolioPageOne";
import MyPortfolioPageThree from "./pages/MyPortfolioPageThree";
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
        <section>
          <MyPortfolioPageThree />
        </section>
      </div>
    </>
  );
}

export default App;
