import { Center, Container, Grid, createStyles } from '@mantine/core'
import React from 'react'
import { BadgeCard } from './BadgeCard';

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

    return (
        <div className={classes.wrapper}>
            <Container size={1100}>
                <Center>
                    <h1>Current open postings</h1>
                </Center>
                <Grid>
                    <Grid.Col sm={12} md={4}>
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
                    </Grid.Col>
                    <Grid.Col sm={12} md={4}>
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
                    </Grid.Col>
                    <Grid.Col sm={12} md={4}>
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
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    )
}

export default Product