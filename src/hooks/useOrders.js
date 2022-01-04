import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`http://localhost:5000/orders`)
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