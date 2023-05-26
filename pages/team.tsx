import { Container, Grid, Text, Title } from '@mantine/core'
import React from 'react'
import { motion } from "framer-motion"
import { PersonCard } from '../components/PersonCard'

const Team = () => {
    return (
        <Container mb={40}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Grid mt={50} mb={20}>
                    <Grid.Col xs={12} md={6}>
                        <Title order={1} c={"white"} >We believe in{" "}
                            <Text component="span" variant="gradient" gradient={{ from: "#00BF63", to: "#00B712" }}>
                                collaboration
                            </Text> and{" "}
                            <Text component="span" variant="gradient" gradient={{ from: "#00BF63", to: "#00B712" }}>
                                continuous learning
                            </Text>
                        </Title>
                    </Grid.Col>
                </Grid>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <Grid mb={30}>
                    <Grid.Col xs={12} md={8}>
                        <Text c={"dimmed"} fz="sm">
                            At ShareRepair, we are driven by a passion for creating new and
                            innovative solutions. We are always seeking out new opportunities
                            to learn and grow, and we know that by working together,
                            we can achieve even greater results.
                        </Text>
                    </Grid.Col>
                </Grid>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
            >
                <Title order={3} c={"white"} mb={"lg"} >Meet the team</Title>
                <Grid>
                    <Grid.Col xs={12} md={6} lg={4}>
                        <PersonCard
                            name={"Viet Duc Kieu"}
                            position={"Founding Team"}
                            description={"DHBW | Data Science"}
                            image={"/duc.jpg"}
                            linkedin={"https://www.linkedin.com/in/viet-duc-kieu-58b498178/"}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={4}>
                        <PersonCard
                            name={"Philipp"}
                            position={"Founding Team"}
                            description={"OTH"}
                            image={"/duc.jpg"}
                            linkedin={"https://www.linkedin.com/in/viet-duc-kieu-58b498178/"}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={4}>
                        <PersonCard
                            name={"David"}
                            position={"Founding Team"}
                            description={"OTH"}
                            image={"/duc.jpg"}
                            linkedin={"https://www.linkedin.com/in/viet-duc-kieu-58b498178/"}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={4}>
                        <PersonCard
                            name={"Sam"}
                            position={"Founding Team"}
                            description={"Uni"}
                            image={"/duc.jpg"}
                            linkedin={"https://www.linkedin.com/in/viet-duc-kieu-58b498178/"}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={4}>
                        <PersonCard
                            name={"Abi"}
                            position={"Founding Team"}
                            description={"OTH"}
                            image={"/duc.jpg"}
                            linkedin={"https://www.linkedin.com/in/viet-duc-kieu-58b498178/"}
                        />
                    </Grid.Col>
                </Grid>
            </motion.div>

        </Container>
    )
}

export default Team