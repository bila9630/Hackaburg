import { Button, Container, Textarea } from '@mantine/core'
import React, { useContext } from 'react'
import { DatabaseContext } from '../contexts/DatabaseContext'

const Testupload = () => {
    const { addPosting }: any = useContext(DatabaseContext)

    const uploadEverything = async () => {
        console.log("clicked!")
        let postingData = {
            attributes: {
                modell: "heyho",
                year: 2200,
            },
            description: "Try not to upset u",
            difficulty: "easy",
            email: "random@web.de",
            image: "https://firebasestorage.googleapis.com/v0/b/hackaburg-d4d9e.appspot.com/o/images%2Fduc.jpg?alt=media&token=c578b728-5db0-4961-8dc9-1e80dca3a679",
            phone: 12342222,
            price: [0, 10],
            title: "Remember not to close to start"
        }
        await addPosting(postingData)
    }

    return (
        <Container>
            <p>Hello World!</p>
            <Button onClick={() => uploadEverything()}>hello world!</Button>
        </Container>
    )
}

export default Testupload