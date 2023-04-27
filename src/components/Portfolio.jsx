import Container from "./Container";
import PortfolioCard from "./PortfolioCard";
import { portfolio } from "../data/data";

const Portfolio = () => {
  
  return (
    <>
      <Container id="portfolio" titulo="Portfolio">
        <div className="grid grid-cols-1 gap-5 pb-1 lg:grid-cols-2">
          {portfolio.map((proyecto) => (
            <PortfolioCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
