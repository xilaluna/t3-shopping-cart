import type { FC, Dispatch, SetStateAction } from "react";
import type { Item } from "@prisma/client";
import { useState } from "react";
import { api } from "../utils/api";

interface ItemModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setItems: Dispatch<SetStateAction<Item[]>>;
}

const ItemModal: FC<ItemModalProps> = ({ setIsModalOpen, setItems }) => {
  const [input, setInput] = useState<string>("");
  const { mutate: addItem } = api.itemRouter.addItem.useMutation({
    onSuccess(item) {
      setItems((prev) => [...prev, item]);
    },
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="space-y-4 bg-white p-3">
        <h3>Name of the item</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:ring"
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="rounded-md bg-gray-400 p-2 text-white"
          >
            Close
          </button>
          <button
            className="rounded-md bg-violet-500 p-2 text-white"
            onClick={() => {
              addItem({ name: input });
              setIsModalOpen(false);
            }}
          >
            Add to Shopping List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
