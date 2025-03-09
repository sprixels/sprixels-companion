import { create } from "zustand"

export const useUserStore = create(
	(set) => ({
		username: '',
		email: '',
		setUsername: (username:string) => set(
			() => ({username: username})
		)
	})
);
