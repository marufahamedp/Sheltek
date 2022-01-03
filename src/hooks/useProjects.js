import { useEffect, useState } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://lit-temple-88055.herokuapp.com/projects`)
      .then(res=>res.json())
      .then(data=>setProjects(data))
      .finally(() => setSpinner(false));
    }, [projects])

    return {
        projects,
        spinner
    }
};

export default useProjects;