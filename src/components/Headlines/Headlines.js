import React from 'react';
import PropTypes from 'prop-types';
import TextArticle from '../../components/TextArticle/TextArticle';
import './headlines.css';

const Headlines = ({ item }) => {
	return (
		<article className="col s12">
			<a
				className="news-headlines"
				href={item.url}
				target="_blank"
				rel="noopener noreferrer">
				<div>
					<span
						className="news-headlines__image circle"
						style={{
							backgroundImage: `url(${item.urlToImage})`
						}}></span>
				</div>
				<TextArticle title={item.title} author={item.author} />
			</a>
		</article>
	);
};

Headlines.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired,
		urlToImage: PropTypes.string.isRequired,
		author: PropTypes.string
	})
};
export default Headlines;
