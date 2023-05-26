import { IconPhone, IconMail  } from '@tabler/icons';
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
    createStyles,
    TextInput,
    Textarea,
    NativeSelect
} from '@mantine/core';


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
    country: string;
    description: string;
    badges: {
        emoji: string;
        label: string;
    }[];
}

export function BadgeCardEdit({ image, title, description, country, badges }: BadgeCardProps) {
    const { classes, theme } = useStyles();

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
                <Group position="apart">
                    <TextInput fz="lg" fw={500} label='Title'
                    placeholder="Enter your problem title" withAsterisk></TextInput>
                    <NativeSelect
                        data={['unknown','easy', 'medium', 'hard',]}
                        label="Select the anticipated difficulty"
                        description="unknown"
                    />
                
                <TextInput fz="lg" fw={500} label='Description'
                    placeholder="Enter details about your problem" withAsterisk></TextInput>
                    </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Basic configuration
                </Text>
                <Group spacing={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
            <Button leftIcon={<IconMail size="1rem" />}>
                <TextInput placeholder='Enter Mail'></TextInput>
            </Button>
            <Button leftIcon={<IconPhone size="1rem" />}>
                <TextInput placeholder='Enter Phone Number'></TextInput>
            </Button>
            </Group>
            <Group mt="xs">
            <Button
            styles={(theme) => ({
                root: {
                  marginTop: 5}})}
                >Submit</Button>
                </Group>
        </Card>
    );
}