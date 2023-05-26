import React, { createContext, useContext } from 'react'
import { app } from '../firebaseClient';
import { getFirestore, getDocs, collection, orderBy, query, limit } from "firebase/firestore";

export const DatabaseContext = createContext(null);

const DatabaseContextProvider = (props: any) => {
    const db: any = getFirestore(app)

    // fetch all player score
    const fetchPosting = async (setPostings: any) => {
        console.log("hello")
        await getDocs(query(collection(db, "postings")))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                setPostings(newData)
            })
    }

    const value: any = { fetchPosting };

    return (
        <DatabaseContext.Provider value={value}>
            {props.children}
        </DatabaseContext.Provider>
    )
}


export default DatabaseContextProvider