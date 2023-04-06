import { TiWarningOutline } from "react-icons/ti";
import Button from "./ui/Button.jsx";
import Modal from "./ui/Modal.jsx";

const DeleteModal = ({ isVisible, setIsVisible, text, title, handleDelete, isButtonDisabled }) => {
  return (
    <Modal isOpen={isVisible} setIsOpen={setIsVisible} headerless size="sm">
      <div className="p-8 flex flex-col gap-2 items-center">
        <div className="bg-red-100 w-[80px] h-[80px] rounded-full flex items-center justify-center">
          <TiWarningOutline className="text-red-500 text-[60px] -translate-y-1" />
        </div>

        <div className="flex flex-col items-center text-center w-2/3">
          <h2 className="font-bold text-[25px]">Delete {title}</h2>
          <div>{text}. Are you sure?</div>
        </div>

        <div className="flex gap-2 my-3 justify-center align-center font-semibold">
          <Button onClick={() => setIsVisible(false)} className="border-none bg-gray-300">
            No, keep it.
          </Button>
          <Button
            onClick={() => {
              handleDelete();
              setIsVisible(false);
            }}
            className="bg-red-500 border-none"
            disabled={isButtonDisabled}
          >
            Yes, delete!
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
