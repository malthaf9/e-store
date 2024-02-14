import { useDispatch, useSelector } from "react-redux";
import { addCategoryData } from "../utils/cardSlice";
import { useEffect } from "react";
import { USE_CATEGORY_API } from "../utils/constants";


const useCategory = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector((store) => store.card?.categoryData);

  const fetchCategoryData = async () => {
      const data = await fetch(USE_CATEGORY_API);
      const json = await data.json();
      dispatch(addCategoryData(json));
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

};

export default useCategory;
