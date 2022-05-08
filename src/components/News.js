import React, { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { Component } from 'react';



export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 20,
        category: 'general',
    }
    
    static PropType = {
        name: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    // const [articles, setArticles] = useState([]);
    // const [loading, setLoading] = useState([true]);
    // const [page, setPage] = useState(1);
    // const [totalResults, setTotalResults] = useState(0);



    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f3581d060a74ec1949a92ad076b5c7b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    }

    async componentDidMount() {
        this.updateNews();

    }

    handleNextClick = async () => {
        this.setState(
            {
                page: this.state.page + 1,
            }
        );
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState(
            {
                page: this.state.page - 1,
            }
        )
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: '35px 0px' }}>DailyKhabar Top Headlines</h1>
                {this.state.loading ? <Spinner /> : ""}

                <div className='row'>
                    {this.state.loading ? "" : this.state.articles.map((e) => {
                        return <div className='col md-3' key={e.url} >
                            <NewsItem title={e.title ? e.title.slice(0, 45) : ""} description={e.description ? e.description.slice(0, 88) : ""} imageUrl={e.urlToImage ? e.urlToImage : "logo512.png"} newsUrl={e.url ? e.url : ""} author={e.author} date={e.publishedAt} />
                        </div>
                    }
                    )}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}




// export default News