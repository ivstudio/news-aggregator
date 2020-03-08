import React from 'react';
// import Moment from 'react-moment';
// import 'moment-timezone';
import Moment from 'moment';

class Greeting extends React.Component {
	fetchTime(formating) {
		const today = new Date();
		return Moment(today).format(formating);
	}

	calcState() {
		const EARLY_MORNING = 9;
		const MORNING = 11;
		const AFTERNOON = 12;
		const EVENING = 17;
		const NIGHT = 23;
		const LATE = 24;
		const currentHour = this.fetchTime('HH');

		switch (true) {
			case currentHour <= EARLY_MORNING:
				return "I hope you've had your coffee already! Here's the good news.";
			case currentHour <= MORNING:
				return "Grab your coffee and let the day begin! Here's the good news.";
			case currentHour <= AFTERNOON:
				return "What about lunch? Here's the good news.";
			case currentHour <= EVENING:
				return 'Good Evening';
			case currentHour <= NIGHT:
				return 'Good Night';
			case currentHour <= LATE:
				return "Thinking deep thoughts? Here's the good news.";
		}
	}

	render() {
		return <div>{this.calcState()}</div>;
	}
}

export default Greeting;
