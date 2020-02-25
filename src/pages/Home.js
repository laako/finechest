import React, { useEffect } from 'react';
import withFineData from '../contexts/FinesContext';

const Home = ({ fineData }) => {
	useEffect(() => {
		console.log(fineData);
	}, [fineData]);
	return (
		<div>
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
