import  NewsCard  from '../components/NewsCard'
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


return(
    <>
        {
            news.map((item, idx) => (
                <div className='container my-3'>
                    <div className="row">
                        <div className="col-md-4 mt-2" key={idx} >
                            <NewsCard
                                image={item.image}
                                title={item.title}
                                content={item.content}
                            />
    
                        </div>
                    </div>
                </div>
            ))
        }
    </>
)
}

export default News;