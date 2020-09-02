import React, { useState, useEffect } from 'react';
import MainFeed from '../../components/MainFeed/MainFeed';
import Headlines from '../../components/Headlines/Headlines';
import Briefs from '../../components/Briefs/Briefs';
import axios from 'axios';

const News = ({ news, layout }) => {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		const NEWS_API = process.env.REACT_APP_NEWS_API;
		const { type, query } = news;
		console.log(NEWS_API);
		const fetchNews = async () => {
			const url = `//newsapi.org/v2/${type}?${query}&apiKey=e4eab21dfd6247abbbb15cc7826c8343`;
			try {
				const articles = await axios.get(url);
				setStories(articles.data.articles);
			} catch (e) {
				console.log('error:', e);
			}
		};
		fetchNews();
	}, [news]);

	if (layout === 'headlines') {
		return (
			<div className="news__block">
				{stories.map((story) => (
					<Headlines key={story.url} item={story} />
				))}
			</div>
		);
	}

	if (layout === 'briefs') {
		return (
			<div className="news__block">
				{stories.map((story, index) => (
					<Briefs key={story.url} item={story} index={index} />
				))}
			</div>
		);
	}

	/* default story */
	return stories.map((story) => <MainFeed key={story.url} item={story} />);
};

export default News;
