import React, { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseClient';


const Testuploadimage = () => {
    const [imageUpload, setImageUpload] = useState<File | undefined>();

    const uploadFile = () => {
        if (!imageUpload) return;

        const imageRef = ref(storage, `images/${imageUpload.name}`);

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
            });
        });
    };


    return (
        <>
            <div>
                <input
                    type="file"
                    onChange={(event) => {
                        const files = event.target.files;
                        if (files && files.length > 0) {
                            setImageUpload(files[0]);
                            console.log(files[0])
                        }
                    }}
                />
                <button onClick={uploadFile}>Upload</button>
            </div>
        </>
    )
}

export default Testuploadimage