import { Container, Image, List, Text, Title } from '@mantine/core';
import { IconHourglassHigh, IconTelescope, IconUsers } from '@tabler/icons';
import { motion } from "framer-motion";
import React from 'react';
import { FeaturesGrid } from '../components/Feature';

const Concept = () => {
    return (
        <Container mb={40}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Title mt={50} mb={20} order={1}>
                    Our concept
                </Title>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <Text mb={50} c={"dimmed"}>Take a look at the way our platform operates!</Text>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
            >
                <Container maw={{ base: "100%", lg: "70%" }}>
                    <Image
                        src="/concept1.svg"
                        alt="Concept"
                        caption="The process for users"
                    />
                </Container>
                <List mt={30} type="ordered">
                    <List.Item>If you have a solution, create a section on our website to assist others in repairing their broken items by providing possible solutions and guidance.</List.Item>
                    <List.Item>Expand your network with people from different sectors.</List.Item>
                    <List.Item>Refurbishing your knowledge by helping others is the best way to stay updated in the 21st century.</List.Item>
                </List>
                <Title mt={50} order={2} c={"white"}>
                    Repairer&apos;s benefits:
                </Title>
                <FeaturesGrid />
                <Title order={2} c={"white"}>
                    User&apos;s benefits:
                </Title>
                <FeaturesGrid data={[
                    {
                        icon: IconTelescope,
                        title: "Get things done",
                        description:
                            "Get your broken things repaired with experts in no time.",
                    },
                    {
                        icon: IconUsers,
                        title: "Meet new people",
                        description:
                            "Meet new people and become an expert in fixing things."
                    },
                    {
                        icon: IconHourglassHigh,
                        title: "Save time and money",
                        description:
                            "Save time and money by meeting friendly people instead of\
                            throwing your broken things."
                    },
                ]} />
            </motion.div>
        </Container>
    )
}

export default Concept