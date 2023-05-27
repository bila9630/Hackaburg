import { Button, Center, Container, createStyles, Text, ActionIcon } from '@mantine/core';
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { IconChevronDown } from '@tabler/icons';
import { useScrollIntoView } from '@mantine/hooks';


const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        boxSizing: 'border-box',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        // set up min height
        minHeight: "90vh",
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
        maxWidth: 500,
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

    function handleClick(): void {
        router.push("/tree");
    }


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
                    <Text component="span" variant="gradient" gradient={{ from: "#00BF63", to: "#00B712" }} inherit>
                        Throwing Away
                    </Text>{' '}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
                >
                    <Center>
                        <Text className={classes.description} color="dimmed">
                            We will help you repair your broken items instead of throwing them away.
                        </Text>
                    </Center>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeIn" }}
                >
                    <Center>
                        <Button
                            onClick={handleClick}
                            size="xl"
                            // className={classes.control}
                            type="submit"
                        >
                            Repair!
                        </Button>
                    </Center>
                </motion.div>

            </Container>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeIn" }}>
                <Center>
                    <Text fz="sm" className={classes.description} color="dimmed">
                        Scroll down to help people
                    </Text>
                </Center>
                <Center>
                    <ActionIcon fz="sm">
                        <IconChevronDown />
                    </ActionIcon>
                </Center>
            </motion.div>
        </div>
    );
}