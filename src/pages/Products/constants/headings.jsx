import { RiDeleteBin6Line, RiSettings3Line } from "react-icons/ri";
import Button from "../../../components/ui/Button";
import { useDispatch } from "react-redux";
import { deleteProductId } from "../../../redux/reducers/productReducer";
import StarRatings from 'react-star-ratings';

export const productsHeadings = () => {
  const dispatch = useDispatch();

  return [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "DESCRIPTION",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "PRICE",
      selector: (row) => {
        return `${row.price} $`;
      },
      sortable: true,
    },
    {
      name: "PHOTO",
      selector: (row) => {
        return (
          <img
            className="h-[50px] m-2 rounded-lg"
            src={row.images[row.images.length - 1]}
          ></img>
        );
      },
    },
    {
      name: "RATING",
      selector: (row) => {return(
        <div><StarRatings rating={row.rating} numberOfStars={5} starDimension="15" starSpacing="1px" starRatedColor="#fde047" /></div>
      )},
      // sortable: true,
    },
    {
      name: "STOCK",
      selector: (row) => row.stock,
      sortable: true,
    },
    {
      name: "CATEGORY",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "",
      selector: (row) => {
        return (
          <div className="flex gap-2">
            <Button
              onClick={() => {
                dispatch(deleteProductId(row.id));
              }}
              className="border border-gray-300 h-fit p-1.5 hover:bg-gray-100"
            >
              <RiSettings3Line className="text-gray-600 text-lg" />
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteProductId(row.id));
              }}
              className="border border-gray-300 text-gray-600 h-fit p-1.5 hover:bg-red-600 hover:text-gray-100"
            >
              <RiDeleteBin6Line className="text-lg" />
            </Button>
          </div>
        );
      },
    },
  ];
};
