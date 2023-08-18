import React, {useEffect, useState} from 'react';
import axios from 'axios';



const News = ({category}) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const apiKey = "63f7c1132317475b9f1ef7ebaec83919";
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&language=en`;
        axios.get(url)
            .then(response => {
                setNews(response.data.articles);
            })
            .catch(error => {
                console.error(`Error fetching ${category} news:`, error);

            });
        
    }, [category]);
  return (
    <div className='bg-[#1e2137]'>
    <div className='text-[50px] ml-[42vw] text-white items-center'>{category} News</div>
    <ul className='grid grid-cols-3 gap-y-4 justify-center items-center'>
        {news.map((article, index) => (
            <li key={index} className='bg-slate-600 h-[50vh] rounded-xl p-4'>
                <div className='flex flex-col items-center'>
                    <img src={article.urlToImage} alt="Article" className='h-[200px] w-full object-cover'/>
                    <h3 className='mt-2 text-white'>{article.title}</h3>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className='bg-blue-500 rounded-xl px-2 py-1 mt-2 text-center text-white'>Read more</a>
                </div>
            </li>
        ))}
    </ul>
</div>

  )
}

export default News