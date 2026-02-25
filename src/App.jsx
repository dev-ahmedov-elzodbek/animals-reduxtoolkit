import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  MantineProvider,
  Container,
  Title,
  Button,
  Group,
  Text,
  SimpleGrid,
  Badge,
  TextInput,
  Stack
} from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import '@mantine/core/styles.css'

import AnimalCard from './components/AnimalCard'
import AddAnimalModal from './components/AddAnimalModal'
import EditAnimalModal from './components/EditAnimalModal'
import DeleteAnimalModal from './components/DeleteAnimalModal'
import ViewAnimalModal from './components/ViewAnimalModal'

function AppContent() {
  // rdux store dan hayvonlar ro'yxatini olamiz
  const animals = useSelector(state => state.animals.animals)

  // mdal holatlari
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [viewModalOpen, setViewModalOpen] = useState(false)

  // tahrirlash va o'chirish
  const [selectedAnimal, setSelectedAnimal] = useState(null)

  // qdiruv matni
  const [searchText, setSearchText] = useState('')

  // qdiruv bo'yicha filtrlash
  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchText.toLowerCase()) ||
    animal.species.toLowerCase().includes(searchText.toLowerCase()) ||
    animal.habitat.toLowerCase().includes(searchText.toLowerCase())
  )

  // more info modali afandim
  const handleView = (animal) => {
    setSelectedAnimal(animal)
    setViewModalOpen(true)
  }

  //tahrirlash modal ochishing
  const handleEdit = (animal) => {
    setSelectedAnimal(animal)
    setEditModalOpen(true)
  }

  // ochirish modal ochishing
  const handleDelete = (animal) => {
    setSelectedAnimal(animal)
    setDeleteModalOpen(true)
  }

  return (
    <Container size="xl" py="xl">
      <Stack gap="md" mb="xl">
        <Group justify="space-between" align="center">
          <div>
            <Title order={1}>🐾 Hayvonlar Dunyosi</Title>
          </div>
          <Group>
            <Badge color="blue" size="lg" variant="light">
              Jami: {animals.length} ta hayvon
            </Badge>
            <Button
              leftSection={<IconPlus size={16} />}
              color="green"
              onClick={() => setAddModalOpen(true)}
            >
              Hayvon qo'shish
            </Button>
          </Group>
        </Group>

        {/* Qidiruv */}
        <TextInput
          placeholder="Hayvon nomi, turi yoki yashash joyi bo'yicha qidirish..."
          leftSection={<IconSearch size={16} />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Natija soni */}
        {searchText && (
          <Text size="sm" c="dimmed">
            "{searchText}" bo'yicha {filteredAnimals.length} ta natija topildi
          </Text>
        )}
      </Stack>

      {/* Hayvonlar  cradlari */} 
      {filteredAnimals.length > 0 ? (
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing="md"
        >
          {filteredAnimals.map(animal => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Text ta="center" c="dimmed" size="lg" mt="xl">
          Hech qanday hayvon topilmadi 
        </Text>
      )}

      {/*modallar */}
      <AddAnimalModal
        opened={addModalOpen}
        onClose={() => setAddModalOpen(false)}
      />

      {selectedAnimal && (
        <>
          <EditAnimalModal
            opened={editModalOpen}
            onClose={() => setEditModalOpen(false)}
            animal={selectedAnimal}
          />
          <DeleteAnimalModal
            opened={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            animal={selectedAnimal}
          />
          <ViewAnimalModal
            opened={viewModalOpen}
            onClose={() => setViewModalOpen(false)}
            animal={selectedAnimal}
          />
        </>
      )}
    </Container>
  )
}

//mantineProvider vareduxproviderni orab olamiz
function App() {
  return (
    <MantineProvider>
      <AppContent />
    </MantineProvider>
  )
}

export default App

