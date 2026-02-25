import { Modal, TextInput, Textarea, Button, Stack, Group } from '@mantine/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAnimal } from '../store/animalsSlice'

function AddAnimalModal({ opened, onClose }) {
  const dispatch = useDispatch()

  // Form holatlari afandim 
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [habitat, setHabitat] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  // Formni tozalash afandim
  const clearForm = () => {
    setName('')
    setSpecies('')
    setHabitat('')
    setImage('')
    setDescription('')
  }

  // saqlash afandim
  const handleSave = () => {
    // tekshiruv afandim
    if (!name.trim()) {
      alert('Iltimos, hayvon nomini kiriting!')
      return
    }

    // reduxga actoin jonatamiz afandim
    dispatch(addAnimal({
      name,
      species,
      habitat,
      image: image || 'https://via.placeholder.com/300x200?text=Rasm+Yoq',
      description
    }))

    //formnitozalaymiz va modalni yopamiz afandim
    clearForm()
    onClose()
  }

  //bekor qilamiz afandim
  const handleCancel = () => {
    clearForm()
    onClose()
  }

  return (
    <Modal
      opened={opened}
      onClose={handleCancel}
      title="Yangi Hayvon Qo'shish"
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
          <Button variant="default" onClick={handleCancel}>Bekor qilish</Button>
          <Button color="green" onClick={handleSave}>Saqlash</Button>
        </Group>
      </Stack>
    </Modal>
  )
}

export default AddAnimalModal

