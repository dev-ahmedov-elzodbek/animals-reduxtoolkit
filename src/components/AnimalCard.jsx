import { Card, Image, Text, Badge, Group, ActionIcon, Tooltip } from '@mantine/core'
import { IconEye, IconEdit, IconTrash } from '@tabler/icons-react'

function AnimalCard({ animal, onView, onEdit, onDelete }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {/*  rasmlari */}
      <Card.Section>
        <Image
          src={animal.image}
          height={180}
          alt={animal.name}
          fallbackSrc="https://via.placeholder.com/300x180?text=Rasm+Yuklanmadi"
        />
      </Card.Section>

      {/*  malumotlar */}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700} size="lg">{animal.name}</Text>
        <Badge color="blue" variant="light" size="sm">
          #{animal.id}
        </Badge>
      </Group>

      <Text size="xs" c="dimmed" mb="xs">
         {animal.species}
      </Text>
      <Text size="xs" c="dimmed" mb="sm">
         {animal.habitat}
      </Text>

      <Text size="sm" lineClamp={2} c="dimmed" mb="md">
        {animal.description}
      </Text>

      {/* tugmalar */}
      <Group justify="flex-end" gap="xs">
        {/* moreinfo tugma */}
        <Tooltip label="Ko'rish">
          <ActionIcon
            variant="light"
            color="blue"
            size="lg"
            onClick={() => onView(animal)}
          >
            <IconEye size={18} />
          </ActionIcon>
        </Tooltip>

        {/* edit tugma */}
        <Tooltip label="Tahrirlash">
          <ActionIcon
            variant="light"
            color="yellow"
            size="lg"
            onClick={() => onEdit(animal)}
          >
            <IconEdit size={18} />
          </ActionIcon>
        </Tooltip>

        {/* ochirish tugma */}
        <Tooltip label="O'chirish">
          <ActionIcon
            variant="light"
            color="red"
            size="lg"
            onClick={() => onDelete(animal)}
          >
            <IconTrash size={18} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Card>
  )
}

export default AnimalCard

