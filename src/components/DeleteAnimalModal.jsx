import { Modal, Text, Button, Group } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { deleteAnimal } from '../store/animalsSlice'

function DeleteAnimalModal({ opened, onClose, animal }) {
  const dispatch = useDispatch()

  // delateni tasdiqladim afandim
  const handleDelete = () => {
    // reduxga delateni jotadim afandim
    dispatch(deleteAnimal(animal.id))
    onClose()
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Hayvonni O'chirish"
      size="sm"
    >
      <Text mb="xl">
        <strong>{animal?.name}</strong> hayvonini o'chirishni tasdiqlaysizmi?
        Bu amal qaytarib bo'lmaydi!
      </Text>
      <Group justify="flex-end">
        <Button variant="default" onClick={onClose}>Bekor qilish</Button>
        <Button color="red" onClick={handleDelete}>O'chirish</Button>
      </Group>
    </Modal>
  )
}

export default DeleteAnimalModal

