import { create } from "zustand";
interface IModelControl {
  modalName: string;
  modalData: any;
  openModel: (name: string, data?: any) => void;
  closeModel: () => void;
}
const useModelStore = create<IModelControl>((set) => ({
  modalName: "",
  modalData: null,
  openModel: (name: string, data?: any) => {
    set({ modalName: name, modalData: data });
  },
  closeModel: () => {
    set({ modalName: "", modalData: null });
  },
}));
export default useModelStore;
