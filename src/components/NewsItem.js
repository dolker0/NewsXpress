import React from 'react'

const NewsItem = (props) => {
    let { title, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="row ">
        <div className="card mb-3 text-white" style={{backgroundColor:'#1f1f1f'}} >
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="image mx-3">
                    <img src={!imageUrl ? "https://static.vecteezy.com/system/resources/previews/007/681/297/non_2x/mic-logo-symbol-for-tv-or-news-company-free-vector.jpg" : imageUrl} className="img-fluid rounded my-4" alt="..." style={{height:"80%" }} />

                    </div>
                </div>
                <div className="col-md-10" >
                    <div className="card-body " >
                    <span className="badge rectangle-pill bg-secondary my-2 ">{source} </span>
                        <h5 className="card-title" >{title}</h5>
                        <p className="card-text" ><small className="text-white">{new Date(date).toGMTString()} • {author?author:"Unknonw"}</small></p>
                        <a rel="noreferrer" href={newsUrl} style={{"background":"red"}} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default NewsItem