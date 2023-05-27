import { Card, Group, Image, Text } from '@mantine/core'
import React from 'react'

// they are all type string
export function PersonCard({ name, position, description, image, linkedin }: any) {
    return (
        <Card p={1}>
            <Card.Section>
                <Image
                    src={image}
                    height={300}
                    alt={name}
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <div>
                    <Text weight={500} size={"lg"}>{name}</Text>
                    <Text c="#00BF63">{position}</Text>
                </div>
                <a href={linkedin} target="_blank" rel="noreferrer" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C5F66" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
            </Group>

            <Text c="dark.6" mb="md">
                {description}
            </Text>
        </Card>
    )
}
