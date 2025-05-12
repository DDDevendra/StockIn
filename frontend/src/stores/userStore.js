import { create } from 'zustand'

export const userStore = create((set)=>({
    users:[],
    addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
    // removeUser:(userId) => set((state)=>({users:state.users.filter}))
    clearUsers: () => set({ users: [] })
}));