import Modal from "../../../components/ui/Modal.jsx";
import { useForm } from "react-hook-form";
import useLoading from "../../../hooks/useLoading.jsx";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../redux/reducers/userReducer.js";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../ui/InputField.jsx";
import InputError from "../../ui/InputError.jsx";
import Button from "../../../components/ui/Button.jsx";

const ProductsModal = ({
  isVisible,
  setIsVisible,
  defaultValues,
  mode = "Add",
  onEditSuccess,
  onAddSuccess,
  onAddFailed,
  onEditFailed,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(noteValidationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    addNoteRequest({ ...data, userId: +id });
  };

  const onEdit = (data) => {
    editNoteRequest({ ...data, id: +defaultValues?.id });
  };

  const [editNoteRequest, editRequestLoading] = useLoading({
    callback: async (data) => {
      const note = await editNote(data.id, data);
      onEditSuccess(data.id, data);
    },
    onError: (error) => {
      onEditFailed(error);
    },
  });

  const [addNoteRequest, requestLoading] = useLoading({
    callback: async (data) => {
      const note = await addNote({ ...data, userId: id ? parseInt(id) : userId });
      onAddSuccess(note);
    },
    onError: (error) => {
      onAddFailed(error);
    },
  });

  return (
    <Modal isOpen={isVisible} setIsOpen={setIsVisible} title={`${mode} product`}>
      <form
        onSubmit={mode === "Edit" ? handleSubmit(onEdit) : handleSubmit(onSubmit)}
        className="w-full shadow-[0_0_100px_0_rgba(0,0,0,0.1)] py-10 xs:px-5 rounded-xl grid gap-4"
      >
        
        <Button disabled={requestLoading || editRequestLoading} children={`${mode} note`} className="ml-auto px-8" />
      </form>
    </Modal>
  );
};

export default ProductsModal;
