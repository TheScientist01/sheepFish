import { useDispatch, useSelector } from "react-redux";
import { selectAlert, setMessage } from "../redux/reducers/alertReducer.js";
import Popup from "./ui/Popup.jsx";

export const AlertWrapper = ({ children }) => {
  const alert = useSelector(selectAlert);
  const dispatch = useDispatch();

  return (
    <>
      {children}
      <Popup text={alert.message} type={alert.type} setText={(text) => dispatch(setMessage(text))} />
    </>
  );
};

export default AlertWrapper;
