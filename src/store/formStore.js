import create from "zustand";

const useFormStore = create((set, get) => ({
  isSubmitted: false,
  updateSubmitted: () => {
    set({isSubmitted: true})
  }
}))

export default useFormStore;