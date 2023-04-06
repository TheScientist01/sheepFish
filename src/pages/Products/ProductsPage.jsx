import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetching from "../../hooks/useFetching";
import {
  addProduct,
  deleteProductId,
  removeProduct,
  selectDeleteId,
  selectProducts,
  setProducts,
} from "../../redux/reducers/productReducer";
import {
  deleteProduct,
  getAllProducts,
  getCategories,
  searchByCategory,
  searchProducts,
} from "./api";
import DataTables from "./components/DataTables";
import { productsHeadings } from "./constants/headings";
import Select from "../../components/ui/Controls/Select";
import Input from "../../components/ui/Controls/Input";
import { useForm } from "react-hook-form";
import useLoading from "../../hooks/useLoading";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import Button from "../../components/ui/Button";
import DeleteModal from "../../components/DeleteModal";
import { excelExport } from "../../helpers";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const [deleteModal, setDeleteModal]=useState(false);
  const deleteId=useSelector(selectDeleteId);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [fetchProducts, isLoading, error] = useFetching(async () => {
    const res = await getAllProducts();
    dispatch(setProducts(res));
  });

  const [fetchCategories] = useFetching(async () => {
    const res = await getCategories();
    setCategories(res);
  });

  const [searchProductsRequest] = useLoading({
    callback: async (data) => {
      const res = await searchProducts(data);
      dispatch(setProducts(res.products));
    },
    onError: () => {
      console.log("Error");
    },
  });

  const [searchByCategories] = useFetching(async () => {
    const res = await searchByCategory(category);
    dispatch(setProducts(res));
  });

  const handleDelete=async ()=>{
    await deleteProduct(deleteId);
    dispatch(removeProduct(deleteId));
  }

  const onSearch = (data) => {
    setCategory("");
    searchProductsRequest(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    // reset();
    searchByCategories();
  }, [category]);

  useEffect(()=>{
    if(!!deleteId){
      setDeleteModal(true);
    }
  }, [deleteId]);

  useEffect(()=>{
    if(deleteModal===false){
      dispatch(deleteProductId(""))
    }
  },[deleteModal])

  useEffect(()=>{
    if(watch("q")===""){
      fetchProducts();
    }
  },[watch("q")])

  return (
    <div className="py-[60px] min-h-[100vh]">
      <div className="mx-auto">
        <div className="mb-5 text-[27px] font-semibold">Products</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 bg-white rounded-md mb-2 py-2 px-4 justify-between">
          <div className="grid grid-cols-2 gap-2 my-2">
            <Select
              options={categories}
              value={category}
              setValue={setCategory}
              name="category"
              register={register}
              className="bg-white"
            />
            <form onSubmit={handleSubmit(onSearch)}>
              <Input
                name="q"
                className="bg-[#f1f1f1] rounded-lg "
                placeholder="Search products"
                register={register}
              />
            </form>
          </div>
          <Button
            className="ml-auto col-span-1 lg:col-span-2 my-auto border border-black text-black rounded-md"
            iconLeft={<MdOutlineDownloadForOffline className="my-auto" />}
            
            onClick={()=>excelExport(products, "products.xlsx")}
          >
            Export
          </Button>
        </div>
        <div className="rounded-lg">
          <DataTables
            data={products}
            columns={productsHeadings()}
            onRowClick={(product) => {
              console.log(product.title);
            }}
          />
        </div>
      </div>
      <DeleteModal isVisible={deleteModal} setIsVisible={setDeleteModal} text="You are going to delete this product" title={`product ${deleteId}`} handleDelete={handleDelete} />
    </div>
  );
};

export default ProductsPage;
