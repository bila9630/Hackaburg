import { IconPhone } from '@tabler/icons';
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    createStyles,
    Textarea,
    Anchor,
    Box,
    Flex,
    Space
} from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    section: {
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },

    like: {
        color: theme.colors.red[6],
    },

    label: {
        textTransform: 'uppercase',
        fontSize: theme.fontSizes.xs,
        fontWeight: 700,
    },
}));

interface BadgeCardProps {
    image: string;
    title: string;
    difficulty: string;
    description: string;
    attributes: {
        emoji: string;
        label: string;
    }[];
}

export function BadgeCard({ image, title, description, difficulty, attributes }: BadgeCardProps) {
    const { classes, theme } = useStyles();
    const [textAreValue, setTextAreaValue] = useState("");
    const [displaySuccess, setDisplaySuccess] = useState(false)
    const [displayWarning, setDisplayWarning] = useState(false)


    const features = attributes.map((badge) => (
        <Badge
            color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
            key={badge.label}
            leftSection={badge.emoji}
        >
            {badge.label}
        </Badge>
    ));

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} height={180} withPlaceholder />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group position="apart">
                    <Text fz="lg" fw={500}>
                        {title}
                    </Text>
                    <Badge size="sm">{difficulty}</Badge>
                </Group>
                <Text lineClamp={4} fz="sm" mt="xs">
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Basic configuration
                </Text>
                <Group spacing={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>



            <Textarea
                label="Contact the lister"
                placeholder="Your message"
                value={textAreValue}
                onChange={(event) => setTextAreaValue(event.currentTarget.value)}
                radius="md"
            />
            {displaySuccess && (<Text ta={"center"} mt={10} mb={10} c={"green"}>Your message has been sent successfully!</Text>)}
            {displayWarning && (<Text ta={"center"} mt={10} mb={10} c={"yellow"}>Cant send an empty message!</Text>)}

            <Space h="xs" />

            <Flex gap="md">
                <Box w={240}>
                    <Button fullWidth onClick={() => {
                        if (textAreValue === "") {
                            setDisplayWarning(true)
                            setDisplaySuccess(false)
                            return
                        }
                        setDisplayWarning(false)
                        setTextAreaValue("")
                        setDisplaySuccess(true)
                    }}>
                        Submit
                    </Button>
                </Box>

                <Box w={140}>
                    <Anchor href="tel:01571234567891055246">
                        <Button color="red" radius="xl" leftIcon={<IconPhone size="1rem" />}>
                            Call Lister
                        </Button>
                    </Anchor>
                </Box>
            </Flex>
        </Card>
    );
}