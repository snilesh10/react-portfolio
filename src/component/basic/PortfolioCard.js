import React from 'react'

const PortfolioCard = ({portfolioData}) => {
    console.log(portfolioData);
  return (
    <>  
        <div className="row">
        {portfolioData.map((currentItem)=>{
            const {id,image,title,shortdesc,description,link,category}=currentItem;
            return(
            <div className="col-md-4 mb-4" key={id}>    
            <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{shortdesc}</p>
                <a href={link} className="btn btn-primary">Visit Website</a>
            </div>
            </div>
            </div>
            );
        })}
        </div>
    </>
  )
}

export default PortfolioCard;