import MyPortfolioSideBar from "./components/MyPortfolioSideBar";
import "./index.css";
import MyPortfolioPageFive from "./pages/MyPortfolioPageFive";
import MyPortfolioPageFour from "./pages/MyPortfolioPageFour";
import MyPortfolioPageOne from "./pages/MyPortfolioPageOne";
import MyPortfolioPageThree from "./pages/MyPortfolioPageThree";
import MyPortfolioPageTwo from "./pages/MyPortfolioPageTwo";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="fixed right-0 z-50">
          <MyPortfolioSideBar />
        </div>

        <section>
          <MyPortfolioPageOne />
        </section>
        <section>
          <MyPortfolioPageTwo />
        </section>
        <section>
          <MyPortfolioPageThree />
        </section>
        <section>
          <MyPortfolioPageFour />
        </section>
        <section>
          <MyPortfolioPageFive />
        </section>
      </div>
    </>
  );
}

export default App;
