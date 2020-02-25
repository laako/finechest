import React, { useState, useEffect } from 'react';
import { getFines } from './methods/fines';
import { FinesContext } from './contexts/FinesContext';

const AppDataProvider = ({ user, children }) => {
	const [fineData, setFineData] = useState(null);

	useEffect(() => {
		const unsubscriber = getFines(setFineData);

		return unsubscriber;
	}, []);

	return (
		<FinesContext.Provider value={{ fineData }}>
			{children}
		</FinesContext.Provider>
	);
};

export default AppDataProvider;
