// Redux Toolkit - Animals Slice
// Bu yerda hayvonlar uchun barcha amallar (action) va holatlar (state) saqlanadi

import { createSlice } from '@reduxjs/toolkit'
import initialAnimals from '../data/animals'

// Boshlang'ich holat (initial state)
const initialState = {
  animals: initialAnimals,  // 50 ta hayvon bilan boshlanadi
}

// Slice yaratamiz
const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    // Hayvon qo'shish
    addAnimal: (state, action) => {
      // Yangi ID yaratamiz (eng katta ID + 1)
      const newId = state.animals.length > 0
        ? Math.max(...state.animals.map(a => a.id)) + 1
        : 1
      const newAnimal = {
        id: newId,
        ...action.payload
      }
      state.animals.push(newAnimal)
    },

    // Hayvon tahrirlash
    editAnimal: (state, action) => {
      const { id, ...updatedData } = action.payload
      // ID bo'yicha topamiz va yangilaymiz
      const index = state.animals.findIndex(a => a.id === id)
      if (index !== -1) {
        state.animals[index] = { id, ...updatedData }
      }
    },

    // Hayvon o'chirish
    deleteAnimal: (state, action) => {
      // ID bo'yicha o'chiramiz
      state.animals = state.animals.filter(a => a.id !== action.payload)
    }
  }
})

// Actionlarni export qilamiz
export const { addAnimal, editAnimal, deleteAnimal } = animalsSlice.actions

// Reducerni export qilamiz
export default animalsSlice.reducer
