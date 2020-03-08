import React, { useState } from 'react';

import News from './News/News';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const App = () => {
	const [news, setNews] = useState({
		artsTechnica: {
			type: 'top-headlines',
			query: 'sources=ars-technica'
		},
		techCrunch: {
			type: 'top-headlines',
			query: 'sources=techcrunch&language=en'
		},
		theNextWeb: {
			type: 'everything',
			query: 'sources=the-next-web'
		},
		wired: {
			type: 'everything',
			query: 'sources=wired'
		},
		hackerNews: {
			type: 'top-headlines',
			query: 'sources=hacker-news'
		}
	});

	return (
		<>
			<Header />
			<main className="container">
				<div className="row">
					<section className="col s12 m7 l8">
						<News news={news.techCrunch} layout="main" />
					</section>
					<aside className="col s12 m5 l4">
						<News news={news.artsTechnica} layout="headlines" />
						<News news={news.artsTechnica} layout="briefs" />
					</aside>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default App;
