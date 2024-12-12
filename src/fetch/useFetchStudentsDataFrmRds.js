import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fnToUpdateTheListOfStudents } from "../ReduxStore/appSlice";
import { toast } from "react-toastify";

const useFetchStudentDataFrmRds = () => {
  const dispatch = useDispatch();
  const getStudentDetails = async () => {
    const res = await fetch(
      "https://enesku5f5k.execute-api.eu-north-1.amazonaws.com/prod/get-users"
    );

    const data = await res.json();

    if (!!data) {
      dispatch(fnToUpdateTheListOfStudents(data));
    }
  };
  useEffect(() => {
    getStudentDetails();
  }, []);
};

export default useFetchStudentDataFrmRds;
