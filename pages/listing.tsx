import { BadgeCardEdit } from '../components/BadgeCardEdit';
import { BaseDemo } from '../components/Dropzone';
//import { BaseDemo } from '../components/Dropzone';

import { HeroTitle } from '../components/HeroTitle';
import Product from '../components/Product';

export default function Home() {
  return (
    <>
      <main>
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
      </main>
    </>
  )
}