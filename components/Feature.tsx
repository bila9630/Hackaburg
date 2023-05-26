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
        title: "Discover top employers",
        description:
            "Explore profiles of various companies in your region and narrow down\
             your options based on the industry or field of work that interests you",
    },
    {
        icon: IconBackpack,
        title: "get company merchandise",
        description:
            "Discover companies that interest you and earn company merchanise.\
            You may also have the chance to attend company events."
    },
    {
        icon: IconBookUpload,
        title: "Easy application",
        description:
            "Apply with your linkedin profile or upload your resume. No hassle with\
            filling out forms!"
    },
    {
        icon: IconBookUpload,
        title: "clear expectations",
        description:
            "Setup clear optional expectations about the job you are looking for.\
            This might be salary expectations or preferred roles."
    },
    {
        icon: IconCup,
        title: "Informal exchange",
        description:
            "Experience an authentic view of the company by meeting with an employee\
             virtually or in person for a special exchange.",
    },
    {
        icon: IconLock,
        title: 'Privacy focused',
        description:
            "You have control over the information that you share with recruiters.\
            Only the companies that you select will be able to see your data.",
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