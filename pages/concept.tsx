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
                <Title mt={50} mb={20} order={1} c={"white"}>
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
                        src="/concept.png"
                        alt="Concept"
                        caption="The process for users"
                    />
                </Container>
                <List mt={30} type="ordered">
                    <List.Item>Sign up and provide information about yourself and your career. You can also upload your CV, but it will only be shared with companies you choose.</List.Item>
                    <List.Item>Discover and interact with companies through various methods, such as watching company introductions, participating in gamification activities, or completing challenges. These activities are designed to help you learn about the company in a fun and interactive way.</List.Item>
                    <List.Item>Receive prizes or &quot;swag&quot; for engaging with a company. These can range from simple items like pens and cups to more substantial items like t-shirts, backpacks, or invitations to company-organized events.</List.Item>
                    <List.Item>If you&apos;re interested in a particular company, you can submit your CV and choose which information you want the recruiter to see. You can also include additional details, such as salary expectations, preferred roles, and whether you are open to working from home. The recruiter will review your CV and, if they are also interested in you, you will move on to the next steps.</List.Item>
                    <List.Item>Chat with recruiters and developers or participate in a meetup with them to get to know each other better. The meetup can be online or in-person, and is a casual opportunity for both sides to get to know each other better.</List.Item>
                    <List.Item>Apply for a specific role and potentially get hired by the company.</List.Item>
                </List>
                <Title mt={50} order={2} c={"white"}>
                    Your benefits:
                </Title>
                <FeaturesGrid />
                <Title order={2} c={"white"}>
                    Employers benefits:
                </Title>
                <FeaturesGrid data={[
                    {
                        icon: IconTelescope,
                        title: "Enhance company visibility",
                        description:
                            "Increase your brand awareness to a wider audience and get more people\
                            interested in your company",
                    },
                    {
                        icon: IconUsers,
                        title: "Access to passive candidates",
                        description:
                            "Our platform allows you to reach out to candidates who are not actively\
                            looking for a job, but are interested in your company and would be a good\
                            fit for your team."
                    },
                    {
                        icon: IconHourglassHigh,
                        title: "Save time and effort",
                        description:
                            "Save time and effort by having candidates apply to you instead of\
                            you having to search for them. You can also use our gamification\
                            activities to engage with candidates and learn more about them."
                    },
                ]} />
            </motion.div>
        </Container>
    )
}

export default Concept