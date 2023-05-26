import {BadgeCardEdit } from '../components/BadgeCardEdit';
import { HeroTitle } from '../components/HeroTitle';
import Product from '../components/Product';

export default function Home() {
  return (
    <>
      <main>
      <BadgeCardEdit
                            image="https://www.svgrepo.com/show/157858/plus.svg"
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