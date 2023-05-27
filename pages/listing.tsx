import React from 'react'
import { BadgeCardEdit } from '../components/BadgeCardEdit';
import { Button, Container, Group, Input, Space, Text, TextInput, Textarea } from '@mantine/core'
import { ImageItemUpload } from '../components/Dropzone';
import { useForm } from '@mantine/form';
import { IconMail, IconPhone } from '@tabler/icons';

const Listing = () => {
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      email: "",
      phone: 1234567890,
    },

    validate: {
      title: (value) => value.trim().length < 1,
      description: (value) => value.trim().length < 1,
      email: (value) => value.trim().length < 1,
    },
  })

  return (
    <>
      <Container size={700}>
        <Space h={30} />
        <Text ta={"center"} fz={30} fw={700}>Create a posting</Text>
        <Space h={20} />

        <form onSubmit={form.onSubmit((values) => {
          console.log(values)
          console.log("hello world!")
        })}>

          <h4>Upload image of your broken item</h4>
          <ImageItemUpload />
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

          {/* Group is from docs */}
          <Group position="center" mt="xl">
            <Button type="submit" size="md">
              Submit posting
            </Button>
          </Group>
        </form>

        <Space h={200} />

        <BadgeCardEdit
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
    </>
  )
}

export default Listing