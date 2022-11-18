
const NewsCard = ({image, title, content}) => {
return (
    <>
        <div className='my-3'>
            <div className="card" style={{width: '18rem'}}>
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href="" className="btn btn-dark">Liat Berita</a>
                </div>
            </div>
        </div>
            
    </>
)}


export default NewsCard;
