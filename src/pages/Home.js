import React, { useEffect } from 'react';
import withFineData from '../contexts/FinesContext';

const Home = ({ fineData }) => {
	return (
		<div>
			<h1>Home</h1>
			{fineData &&
				fineData.map(fine => (
					<div key={fine.id}>
						<p>{fine.id}</p>
						<p>{fine.amount}</p>
					</div>
				))}
		</div>
	);
};

export default withFineData(Home);
