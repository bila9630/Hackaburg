import { Button, Center, Container, createStyles, Grid, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { useState } from 'react';


const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        boxSizing: 'border-box',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        minHeight: "80vh",
    },

    inner: {
        position: 'relative',
        paddingTop: 110,
        paddingBottom: 160,

        [BREAKPOINT]: {
            paddingBottom: 80,
            paddingTop: 80,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.1,
        margin: 0,
        padding: 0,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        textAlign: "center",

        [BREAKPOINT]: {
            fontSize: 40,
            lineHeight: 1.2,
        },
    },

    description: {
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 2,
        fontSize: 22,
        textAlign: "center",

        [BREAKPOINT]: {
            fontSize: 16,
        },
    },
}));

export function HeroTitle() {
    const { classes } = useStyles();
    const router = useRouter()

    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={classes.title}
                >
                    Repair instead of{' '}
                    <Text component="span" variant="gradient" gradient={{ from: "#FBD72B", to: "#F9484A" }} inherit>
                        Throwing-away
                    </Text>{' '}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
                >
                    <Text className={classes.description} color="dimmed">
                        We will help you repair your broken items instead of throwing them away.{' '}
                    </Text>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeIn" }}
                >
                    <Center>
                        <Button
                            size="xl"
                            // className={classes.control}
                            variant="gradient"
                            gradient={{ from: "#FBD72B", to: "#F9484A" }}
                            type="submit"
                        >
                            Let us help you
                        </Button>
                    </Center>
                </motion.div>
            </Container>
        </div>
    );
}