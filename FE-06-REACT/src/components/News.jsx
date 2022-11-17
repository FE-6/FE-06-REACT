import axios from 'axios';
import { useState, useEffect } from 'react';

function News() {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios("https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article").then((res) => {
          setNews(res.data);
          setIsLoading(false);
        });
      }, []);

      console.log(news);

  const clickNew = (item) => {
    console.log(item);
    };

return (
    <>
        {
            news.map((item, idx) => (
                <div className='my-3'>
                <div className="card" style={{width: '18rem'}} key={idx} onClick={() => clickNew(item)}>
                    <img src={item.image} className="card-img-top" alt="" />
                    <div className="card-body" >
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.content}</p>
                        <a href="" className="btn btn-dark">Liat Berita</a>
                    </div>
                </div>
            </div>
            ))
        }
    </>
)
}

export default News
