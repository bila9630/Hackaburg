import { BadgeCardEdit } from '../components/BadgeCardEdit';
import { Center, Container, Grid, createStyles } from '@mantine/core'
import { BaseDemo } from '../components/Dropzone';
//import { BaseDemo } from '../components/Dropzone';

import { HeroTitle } from '../components/HeroTitle';
import Product from '../components/Product';

export default function Home() {
  return (
    <>
      <main>
        
      <Container size={400}>
        <BaseDemo></BaseDemo>
        <BadgeCardEdit
                            image=""
                            title="What is your problem"
                            country="Difficulty"
                            description="Describe your Problem in detail"
                            badges={[
                                {
                                    "emoji": "Model:",
                                    "label": "Bosch TZ21"
                                },
                                {
                                    "emoji": "Year:",
                                    "label": "2012"
                                },
                                {
                                    "emoji": "+",
                                    "label": ""
                                },
                            ]}
                        />
            </Container>
      </main>
    </>
  )
}