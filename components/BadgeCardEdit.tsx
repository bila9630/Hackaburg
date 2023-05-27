import { IconPhone, IconMail } from '@tabler/icons';
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Space,
    Button,
    ActionIcon,
    createStyles,
    TextInput,
    Textarea,
    NativeSelect,
    Container,
    Input,
    Center
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
    badges: {
        emoji: string;
        label: string;
    }[];
}

export function BadgeCardEdit({ badges }: BadgeCardProps) {
    const { classes, theme } = useStyles();
    const [title, setTitle] = useState("");


    const features = badges.map((badge) => (
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
            <Card.Section className={classes.section} mt="md">

                <TextInput fz="lg" fw={500} label='Title'
                    placeholder="Enter your problem title" withAsterisk></TextInput>
                <Space h="xs" />
                <NativeSelect
                    data={['unknown', 'easy', 'medium', 'hard',]}
                    label="Select the anticipated difficulty"
                />
                <Space h="xs" />
                <Textarea autosize
                    minRows={2} fz="mi" fw={500} label='Description'
                    placeholder="Enter details about your problem" withAsterisk></Textarea>
            </Card.Section>


            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Basic configuration
                </Text>
                <Group spacing={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            {/* <Button leftIcon={<IconMail size="1rem" />}>
                    <TextInput placeholder='Enter Mail'></TextInput>
                </Button> */}
            <Space h={20} />
            <Input
                icon={<IconMail size="1rem" />}
                placeholder="Your email"
            />
            <Space h={20} />
            <Input
                icon={<IconPhone size="1rem" />}
                placeholder="Your phone number"
            />
            <Space h={20} />
            <Center>
                <Button>Submit</Button>
            </Center>
        </Card>
    );
}