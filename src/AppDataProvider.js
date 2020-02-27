import React, { useState, useEffect } from 'react';
import { getFines } from './methods/fines';
import { FinesContext } from './contexts/FinesContext';
import { UserContext } from './contexts/User';

const AppDataProvider = ({ user, children }) => {
	const [fineData, setFineData] = useState(null);
	const userId = user ? user.uid : null;

	useEffect(() => {
		if (!userId) {
			setFineData(null);
			return undefined;
		}
		const unsubscriber = getFines(setFineData);

		return unsubscriber;
	}, []);

	return (
		<UserContext.Provider value={{ user }}>
			<FinesContext.Provider value={{ fineData }}>
				{children}
			</FinesContext.Provider>
		</UserContext.Provider>
	);
};

export default AppDataProvider;
