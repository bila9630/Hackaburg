import React, { createContext, useContext, useState } from 'react'
import { app } from '../firebaseClient';
import { getFirestore, getDocs, collection, orderBy, query, limit, addDoc } from "firebase/firestore";

export const DatabaseContext = createContext(null);

interface postingData {
    attributes: Map<string, any>,
    description: String,
    difficulty: String,
    email: String,
    image: String,
    phone: Number,
    price: Array<Number>,
    title: String,
}

const DatabaseContextProvider = (props: any) => {
    const db: any = getFirestore(app)
    const [imageName, setImageName] = useState("");
    const [imageUpload, setImageUpload] = useState<File | undefined>();


    // fetch all postings
    const fetchPosting = async (setPostings: any) => {
        await getDocs(query(collection(db, "postings")))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                setPostings(newData)
            })
    }

    // add a new posting
    const addPosting = async (data: postingData) => {
        const postingDbRef = collection(db, "postings")
        await addDoc(postingDbRef, {
            attributes: data.attributes,
            description: data.description,
            difficulty: data.difficulty,
            email: data.email,
            image: data.image,
            phone: data.phone,
            price: data.price,
            title: data.title
        })
    }

    const value: any = {
        fetchPosting, addPosting, imageName, setImageName,
        imageUpload, setImageUpload
    };

    return (
        <DatabaseContext.Provider value={value}>
            {props.children}
        </DatabaseContext.Provider>
    )
}


export default DatabaseContextProvider