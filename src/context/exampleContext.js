'use client'
import { create } from 'zustand'

const idiomContext = create((set) => ({
   language: 'español',
   //setLanguage: (language)=>set((state)=>({language}))
}))

export default idiomContext
