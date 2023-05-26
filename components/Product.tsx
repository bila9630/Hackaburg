import { Button, Center, Container, Grid, createStyles } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { BadgeCard } from './BadgeCard';
import { DatabaseContext } from '../contexts/DatabaseContext';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        boxSizing: 'border-box',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        // set up min height
        minHeight: "90vh",
    },
}));

const Product = () => {
    const { classes } = useStyles();
    const { fetchPosting }: any = useContext(DatabaseContext)
    const [postings, setPostings] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetchPosting(setPostings);
        };
        fetchData();
    }, [fetchPosting])

    // useEffect(() => {
    //     fetchPosting(setPostings)

    //     // Fetch players every 8 seconds
    //     const intervalId = setInterval(() => {
    //         fetchPosting(setPostings);
    //         console.log(postings);
    //     }, 8000);

    //     // Clear the interval when the component unmounts
    //     return () => clearInterval(intervalId);

    // }, [fetchPosting])


    return (
        <div className={classes.wrapper}>
            <Container size={1100}>
                <Center>
                    <h1>Current open postings</h1>
                    <Button onClick={() => { console.log(postings) }}>fetch</Button>
                </Center>
                <Grid>
                    {postings.map((posting: any, index: number) => {
                        return (
                            <Grid.Col key={index} sm={12} md={4}>
                                <BadgeCard
                                    image={posting.image}
                                    title={posting.title}
                                    difficulty={posting.difficulty}
                                    description={posting.description}
                                    attributes={[
                                        {
                                            "emoji": "☀️",
                                            "label": "Sunny weather"
                                        },
                                        {
                                            "emoji": "🦓",
                                            "label": "Onsite zoo"
                                        },
                                        {
                                            "emoji": "🌊",
                                            "label": "Sea"
                                        },
                                    ]}
                                />
                            </Grid.Col>
                        )
                    })}
                    {/* <Grid.Col sm={12} md={4}>
                        <BadgeCard
                            image="https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80"
                            title="New office in New York"
                            country="New York"
                            description="We are expanding to New York! Check out our new office!!"
                            badges={[
                                {
                                    "emoji": "☀️",
                                    "label": "Sunny weather"
                                },
                                {
                                    "emoji": "🦓",
                                    "label": "Onsite zoo"
                                },
                                {
                                    "emoji": "🌊",
                                    "label": "Sea"
                                },
                            ]}
                        />
                    </Grid.Col> */}
                </Grid>
            </Container>
        </div>
    )
}

export default Product