import React,{useState} from 'react';
import NavBar from './NavBar';
import PortfolioCard from './PortfolioCard';
import PortfolioItems from './PortfolioApi';

const portfolioCategories=["All",...new Set(PortfolioItems.map((currentItem)=>{
  return currentItem.category;
}))];

console.log(portfolioCategories);

const Portfolio = () => {


   const [portfolioData,setPortfolioData]=useState(PortfolioItems); 
   const [NavList , setNavList] = useState(portfolioCategories);

   const filterItem=(category)=>{
    if(category==="All"){
      setPortfolioData(PortfolioItems);
      return;
    }
     const updatedPortfolio=PortfolioItems.filter((currentItem)=>{
       return currentItem.category===category;
     });
     setPortfolioData(updatedPortfolio);
   }
  return (
    <>
    <NavBar filterItem={filterItem} navList={NavList}></NavBar>
    <div className="container">
    <PortfolioCard portfolioData={portfolioData}></PortfolioCard>
    </div>
    </>
  )
}

export default Portfolio;