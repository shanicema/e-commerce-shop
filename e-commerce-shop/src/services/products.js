import {collection, getDocs} from 'firebase/firestore';
import db from '../config/firebase';

const getProducts = async() => {
    // get the collection reference
    const collectionRef = collection(db, 'products')
    // get query snapshot of all documents in the db
    const querySnapshot = await getDocs(collectionRef);

    // clean the data so it's easier to use in react

    const cleanedData = querySnapshot.docs.map(rawDocument => {
        // console.log(rawDocument);
        // console.log(rawDocument.id);
        // console.log(rawDocument.data());
        const id = rawDocument.id;
        const restOfData = rawDocument.data();
        return {id, ...restOfData};
    })

    return cleanedData;

};

export default getProducts;