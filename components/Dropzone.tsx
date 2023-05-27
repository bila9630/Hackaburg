
import { Group, Text, useMantineTheme, Image } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useContext, useState } from 'react';
import { DatabaseContext } from '../contexts/DatabaseContext';

export function ImageItemUpload(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();
  const { setImageName, setImageUpload }: any = useContext(DatabaseContext)

  return (
    <Dropzone
      onDrop={(files) => {
        setImageName(files[0]["name"])
        setImageUpload(files[0])
      }}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group position="center" spacing="xl" style={{ minHeight: 160, pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <p>Good job!</p>
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size="3.2"
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size="120" stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach some pictures
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}