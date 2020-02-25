import { firebase, ffines } from '../api/firebase';

export const getFines = setFineData => {
	const unsubscriber = ffines.onSnapshot(snapshot => {
		const fines = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data(),
		}));
        setFineData(fines);
	});

	return unsubscriber;
};

export const createFine = ({ userId, fineData }) =>
	new Promise((res, rej) => {

		ffines
			.add({
				addedBy: userId,
				...fineData,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				modifiedAt: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then(res)
			.catch(err => {
				console.error('Error adding new fine to database', err);
				rej(err);
			});
	});
