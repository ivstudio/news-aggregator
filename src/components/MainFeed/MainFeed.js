import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './main-feed.css';

const MainFeed = ({ item }) => {
	return (
		<div className="row">
			<div className="col s12">
				<a
					className="news-card"
					href={item.url}
					target="_blank"
					rel="noopener noreferrer">
					<div className="news-card__image-container">
						<div
							className="news-card__image"
							style={{
								backgroundImage: `url(${item.urlToImage})`
							}}
						/>
					</div>

					<div className="news-card__content">
						<h2 className="news-card__title">{item.title}</h2>
						<p className="news-card__description">
							{item.description}
						</p>
						<ul className="news-card__meta">
							{item.author && (
								<li className="news-card__meta-author">
									By {item.author}
								</li>
							)}
							<li className="news-card__meta-seperator">•</li>
							<li className="news-card__meta-published-date">
								<Moment format="MMM D, YYYY ">
									{item.dateToFormat}
								</Moment>
							</li>
						</ul>
					</div>
				</a>
			</div>
		</div>
	);
};

MainFeed.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired,
		urlToImage: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		author: PropTypes.string,
		dateToFormat: PropTypes.instanceOf(Date)
	})
};

export default MainFeed;
