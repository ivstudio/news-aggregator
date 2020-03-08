import React from 'react';
import PropTypes from 'prop-types';
import './text-article.css';

const TextArticle = ({ title, author }) => {
	return (
		<div className="text-article__content">
			<h2 className="text-article__title">{title}</h2>

			{author && <p className="text-article__author">by {author}</p>}
		</div>
	);
};

TextArticle.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string
};

export default TextArticle;
