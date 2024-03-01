import { create } from 'zustand'

const useStore = create((set) => ({
   logged: false,
   user: null,
   login: (user) => set((state) => ({ logged: true, user })),
   logout: () => set((state) => ({ logged: false, user: null })),
}))

export default useStore
