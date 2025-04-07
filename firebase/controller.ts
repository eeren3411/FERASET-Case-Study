import { collection, addDoc, doc, increment, updateDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

type Entry = {
	prompt: string,
	style: string,
}

export async function createEntry({ prompt, style }: Entry) {
	let remainingTime = Math.floor(Math.random()*10);

	const docRef = await addDoc(collection(db, "entries"), {
		prompt: prompt,
		style: style,
		remainingTime: remainingTime,
		createdAt: Date.now().toString(),
	});
	
	const intervalId = setInterval(async () => { // Birazcık Allah'a emanet oldu ama Firebase Functions ve hatta Storage bile 5 ay önce ücretli olmuş. Özür dilerim. 🙏🙏
		remainingTime--;
		if (remainingTime < 0) {
			clearInterval(intervalId);
			return;
		}

		await updateDoc(doc(db, "entries", docRef.id), { 
			remainingTime: remainingTime,
			imgUrl: remainingTime === 0 ? "https://lookhuman.com/cdn/shop/files/product-giant-414925-diecut-whi-sm.jpg" : undefined
		 });
	}, 1000);


	return docRef.id;
}

export function listen(docId: string, callback: (data: any) => void) {
	const docRef = doc(db, "entries", docId);
	const unsubscribe = onSnapshot(docRef, (doc) => {
		callback(doc.data());
	});

	return unsubscribe;
}

export async function getEntry(docId: string) {
	const docRef = doc(db, "entries", docId);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		return {};
	}
}