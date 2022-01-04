import React, { useEffect, useState } from 'react'

function Reviewbox({_id}) {
    const [userreviews, setUserreviews] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/userreview`)
      .then(res => res.json())
      .then(data => setUserreviews(data))
  }, [userreviews])
    return (
        <div>
            
        </div>
    )
}

export default Reviewbox
