import {
    Container, createStyles, SimpleGrid,
    Text, ThemeIcon, useMantineTheme
} from '@mantine/core';
import {
    IconBackpack, IconBookUpload, IconCup,
    IconGlobe, IconLock, TablerIcon
} from '@tabler/icons';

export const MOCKDATA = [
    {
        icon: IconGlobe,
        title: "Lend a helping hand",
        description:
            "Lend a helping hand towards people in need and socialize yourself.",
    },
    {
        icon: IconBackpack,
        title: "Enhancing Skills",
        description:
            "Helping those in need enhances personal growth, skills, empathy, compassion, problem-solving, and fosters inclusivity and compassion in society.."
    },
    {
        icon: IconLock,
        title: 'Privacy focused',
        description:
            "You have control over the information that you share with the users personally.",
    },
];

interface FeatureProps {
    icon: TablerIcon;
    title: React.ReactNode;
    description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
    const theme = useMantineTheme();
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon size={20} stroke={1.5} />
            </ThemeIcon>
            <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
            <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
                {description}
            </Text>
        </div>
    );
}

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
    },

}));

interface FeaturesGridProps {
    data?: FeatureProps[];
}

export function FeaturesGrid({ data = MOCKDATA }: FeaturesGridProps) {
    const { classes, theme } = useStyles();
    const features = data.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Container className={classes.wrapper}>
            <SimpleGrid
                cols={3}
                spacing={theme.spacing.xl * 2}
                breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: 'xl' },
                    { maxWidth: 755, cols: 1, spacing: 'xl' },
                ]}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
}