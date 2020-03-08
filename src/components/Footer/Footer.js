import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<p className="footer__copyright">
					© 2018 Techie News by
					<a href="http://www.ivstudio.com/"> ivstudio </a>
					and powered by
					<a href="http://www.ivstudio.com/"> NewsAPI.org</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
