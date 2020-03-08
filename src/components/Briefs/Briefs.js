import React from 'react';
import PropTypes from 'prop-types';
import TextArticle from '../../components/TextArticle/TextArticle';
import './briefs.css';

const Briefs = ({ item, index }) => {
	return (
		<article className="col s12">
			<a
				className="news-briefs"
				href={item.url}
				target="_blank"
				rel="noopener noreferrer">
				<span className="news-briefs__index">
					{index < 9 && `0`}
					{index + 1}
				</span>

				<TextArticle title={item.title} author={item.author} />
			</a>
		</article>
	);
};

Briefs.propTypes = {
	item: PropTypes.shape({
		index: PropTypes.number,
		title: PropTypes.string.isRequired,
		author: PropTypes.string
	})
};

export default Briefs;
