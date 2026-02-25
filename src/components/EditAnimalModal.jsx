import { Modal, TextInput, Textarea, Button, Stack, Group } from '@mantine/core'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editAnimal } from '../store/animalsSlice'

function EditAnimalModal({ opened, onClose, animal }) {
  const dispatch = useDispatch()

  // from holatlari
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [habitat, setHabitat] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  // Modal ochilganda mavjud hayvon ma'lumotlarini formga to'ldirish
  useEffect(() => {
    if (animal) {
      setName(animal.name || '')
      setSpecies(animal.species || '')
      setHabitat(animal.habitat || '')
      setImage(animal.image || '')
      setDescription(animal.description || '')
    }
  }, [animal])

  // saqlash
  const handleSave = () => {
    if (!name.trim()) {
      alert('Iltimos, hayvon nomini kiriting!')
      return
    }

    // reduxga tahrirlashni yuboramiz afandim
    dispatch(editAnimal({
      id: animal.id,
      name,
      species,
      habitat,
      image: image || 'https://via.placeholder.com/300x200?text=Rasm+Yoq',
      description
    }))

    onClose()
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Hayvonni Tahrirlash"
      size="md"
    >
      <Stack gap="sm">
        <TextInput
          label="Hayvon nomi"
          placeholder="Masalan: Sher"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextInput
          label="Ilmiy nomi (species)"
          placeholder="Masalan: Panthera leo"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <TextInput
          label="Yashash joyi (habitat)"
          placeholder="Masalan: Afrika sahrosi"
          value={habitat}
          onChange={(e) => setHabitat(e.target.value)}
        />
        <TextInput
          label="Rasm URL"
          placeholder="https://..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Textarea
          label="Tavsif"
          placeholder="Hayvon haqida qisqacha ma'lumot..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={onClose}>Bekor qilish</Button>
          <Button color="blue" onClick={handleSave}>Saqlash</Button>
        </Group>
      </Stack>
    </Modal>
  )
}

export default EditAnimalModal

