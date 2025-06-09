import { useState, useEffect, useRef } from "react";
import MyPortfolioSideBar from "./components/MyPortfolioSideBar";
import "./index.css";
import MyPortfolioPageFive from "./pages/MyPortfolioPageFive";
import MyPortfolioPageFour from "./pages/MyPortfolioPageFour";
import MyPortfolioPageOne from "./pages/MyPortfolioPageOne";
import MyPortfolioPageThree from "./pages/MyPortfolioPageThree";
import MyPortfolioPageTwo from "./pages/MyPortfolioPageTwo";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            setCurrentPage(index + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="fixed right-0 z-60">
          <MyPortfolioSideBar pageNumber={currentPage} />
        </div>

        <section ref={sectionRefs[0]}>
          <MyPortfolioPageOne />
        </section>
        <section ref={sectionRefs[1]}>
          <MyPortfolioPageTwo />
        </section>
        <section ref={sectionRefs[2]}>
          <MyPortfolioPageThree />
        </section>
        <section ref={sectionRefs[3]}>
          <MyPortfolioPageFour />
        </section>
        <section ref={sectionRefs[4]}>
          <MyPortfolioPageFive />
        </section>
      </div>
    </>
  );
};

export default App;
