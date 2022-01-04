import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const useProjectDetails = () => {
    const {peojectID} = useParams()
    const [projectDetails, setProjectDetails] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`http://localhost:5000/projects/${peojectID}`)
      .then(res=>res.json())
      .then(data=>setProjectDetails(data))
      .finally(() => setSpinner(false));
    }, [peojectID])

    return {
        projectDetails,
        spinner
    }
};

export default useProjectDetails;