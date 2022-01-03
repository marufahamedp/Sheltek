import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://lit-temple-88055.herokuapp.com/orders`)
      .then(res=>res.json())
      .then(data=>setOrders(data))
      .finally(() => setSpinner(false));
    }, [orders])

    return {
        orders,
        spinner
    }
};

export default useOrders;