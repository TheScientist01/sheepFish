import Modal from "../../../components/ui/Modal.jsx";
import { useForm } from "react-hook-form";
import useLoading from "../../../hooks/useLoading.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/ui/Button.jsx";
import { addProduct, editProduct } from "../api/index.js";
import Input from "../../../components/ui/Controls/Input.jsx";
import { productValidationSchema } from "../validators/index.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addAProduct,
  editAProduct,
  selectEditProduct,
  setEditProduct,
} from "../../../redux/reducers/productReducer.js";
import { useEffect } from "react";
import { displayAlert } from "../../../redux/reducers/alertReducer.js";

const ProductsModal = ({
  isVisible,
  setIsVisible,
  defaultValues,
  mode = "Add",
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productValidationSchema),
    defaultValues: defaultValues,
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    addProductRequest(data);
  };

  const onEdit = (data) => {
    editProductRequest(data);
  };

  const [editProductRequest, editRequestLoading] = useLoading({
    callback: async (data) => {
      const product = await editProduct(data);
      dispatch(editAProduct(data));
      setIsVisible(false);
      dispatch(setEditProduct({}));
      dispatch(displayAlert({type:true, message: "Product was edited successfully"}))
    },
    onError: (error) => {
      dispatch(displayAlert({type:false, message: "Product could not be edited"}))
    },
  });

  const [addProductRequest, requestLoading] = useLoading({
    callback: async (data) => {
      const product = await addProduct(data);
      dispatch(
        addAProduct({ ...data, id: product.id, rating: parseInt(data.rating) })
      );
      dispatch(displayAlert({type:true, message: "Product was added successfully"}))
      setIsVisible(false);
    },
    onError: (error) => {
      dispatch(displayAlert({type:false, message: "Product could not be added"}))
      console.log(error);
    },
  });

  useEffect(() => {
    if (!isVisible) {
      reset();
      dispatch(setEditProduct({}));
    }
  }, [isVisible]);

  return (
    <Modal
      isOpen={isVisible}
      setIsOpen={setIsVisible}
      title={`${mode} product`}
    >
      <form
        onSubmit={
          mode === "Edit" ? handleSubmit(onEdit) : handleSubmit(onSubmit)
        }
        className="grid grid-row grid-cols-2 gap-y-3 gap-x-4"
      >
        <Input
          name="title"
          label="Title"
          required={true}
          msgError={errors.title?.message}
          register={register}
        />
        <Input
          name="brand"
          label="Author"
          required={true}
          msgError={errors.brand?.message}
          register={register}
        />
        <Input
          type="date"
          name="date"
          label="Date"
          // required={true}
          msgError={errors.date?.message}
          register={register}
        />
        <Input
          type="number"
          name="rating"
          label="Rating"
          required={true}
          msgError={errors.rating?.message}
          register={register}
        />
        <Button
          disabled={requestLoading || editRequestLoading}
          children={`${mode} product`}
          className="col-span-2 ml-auto px-8 bg-purple-400 my-2 border border-black"
        />
      </form>
    </Modal>
  );
};

export default ProductsModal;
