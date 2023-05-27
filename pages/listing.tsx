import React, { useContext, useState } from 'react'
import { Badge, Button, Container, Group, Input, NativeSelect, NumberInput, Space, Text, TextInput, Textarea } from '@mantine/core'
import { ImageItemUpload } from '../components/Dropzone';
import { useForm } from '@mantine/form';
import { DatabaseContext } from '../contexts/DatabaseContext';
import { storage } from '../firebaseClient';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


const Listing = () => {
  const badges = [
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
  ]

  const features = badges.map((badge) => (
    <Badge
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      email: "",
      phone: 0,
      difficulty: "unknown",
    },

    validate: {
      title: (value) => value.trim().length < 1,
      description: (value) => value.trim().length < 1,
      email: (value) => !/^\S+@\S+$/.test(value),
    },
  })

  const { addPosting, imageName, imageUpload, setImageName }: any = useContext(DatabaseContext)
  const [displaySuccess, setDisplaySuccess] = useState(false)
  const [displayLoading, setDisplayLoading] = useState(false)

  return (
    <>
      <Container size={700}>
        <Space h={30} />
        <Text ta={"center"} fz={30} fw={700}>Create a posting</Text>
        <Space h={20} />

        <form onSubmit={form.onSubmit(async (values) => {
          setDisplayLoading(true)
          setDisplaySuccess(false)
          console.log(values)
          // upload image to firebase
          const imageRef = ref(storage, `images/${imageUpload.name}`);
          const snapshot = uploadBytes(imageRef, imageUpload)
          const url = await getDownloadURL((await snapshot).ref)
          const imgUrl = url

          // send data to firebase
          let postingData = {
            title: values.title,
            description: values.description,
            email: values.email,
            phone: values.phone,
            difficulty: values.difficulty,
            attributes: {
              modell: "heyho",
              year: 2200,
            },
            image: imgUrl,
            price: [0, 10]
          }
          await addPosting(postingData)
          form.reset()
          setDisplayLoading(false)
          setDisplaySuccess(true)
          setImageName("")
          console.log("finished")
        })}>

          <h4>Upload image of your broken item</h4>
          <ImageItemUpload />
          {imageName && (
            <Text ta={"center"} mt={10} c={"green"}>{imageName} uploaded successfully!</Text>
          )}

          <Space h={20} />

          <TextInput
            fz="lg" fw={500} label='Title'
            placeholder="Enter your problem title"
            withAsterisk
            {...form.getInputProps("title")}
          />
          <Space h={20} />

          <Textarea
            autosize minRows={2} fz="mi"
            fw={500} label='Description'
            placeholder="Enter details about your problem"
            withAsterisk
            {...form.getInputProps("description")}
          />
          <Space h={5} />

          <h5>Basic configuration</h5>
          <Group spacing={7} mt={5}>
            {features}
          </Group>
          <Space h={20} />

          <TextInput
            fz="lg" fw={500} label='email'
            placeholder="Enter your email"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <Space h={20} />

          <NumberInput
            placeholder="Enter your telephone number"
            label="telephone number"
            withAsterisk
            hideControls
            {...form.getInputProps("phone")}
          />
          <Space h={20} />

          <NativeSelect
            data={['unknown', 'easy', 'medium', 'hard',]}
            label="Select the anticipated difficulty"
            withAsterisk
            {...form.getInputProps("difficulty")}
          />
          <Space h={20} />
          {displaySuccess && (<Text ta={"center"} mt={10} c={"green"}>Your message has been sent successfully!</Text>)}
          {displayLoading && (<Text ta={"center"} mt={10} c="yellow">Loading...</Text>)}

          {/* Group is from docs */}
          <Group position="center" mt="xl">
            <Button type="submit" size="md">
              Submit posting
            </Button>
          </Group>

          <Space h={20} />

        </form>

      </Container>
    </>
  )
}

export default Listing