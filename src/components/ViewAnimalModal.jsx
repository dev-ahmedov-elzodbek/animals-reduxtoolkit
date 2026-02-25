import { Modal, Image, Text, Badge, Stack, Group } from '@mantine/core'

function ViewAnimalModal({ opened, onClose, animal }) {
  if (!animal) return null

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={animal.name}
      size="md"
    >
      <Stack gap="md">
        <Image
          src={animal.image}
          alt={animal.name}
          height={220}
          fit="cover"
          radius="md"
          fallbackSrc="https://via.placeholder.com/400x220?text=Rasm+Yuklanmadi"
        />
        <Group gap="xs">
          <Badge color="blue" variant="light">
            {animal.species || 'Noma\'lum tur'}
          </Badge>
          <Badge color="green" variant="light">
            {animal.habitat || 'Noma\'lum joy'}
          </Badge>
        </Group>
        <Text size="sm" c="dimmed">
          {animal.description || 'Tavsif yo\'q'}
        </Text>
      </Stack>
    </Modal>
  )
}

export default ViewAnimalModal

