import { useDispatch } from "react-redux";
import { addCardData } from "../utils/cardSlice";
import { useEffect } from "react";
import { USE_CARD_API } from "../utils/constants";

const useCard = () => {
    const dispatch = useDispatch()

    const fetchData = async () => {
        const data = await fetch(USE_CARD_API);
        const json = await data.json();
        //console.log(json)
        dispatch(addCardData(json))
    }

    useEffect(() => {
        fetchData();
    }, [])
}

export default useCard;