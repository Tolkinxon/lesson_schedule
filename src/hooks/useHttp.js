import { useCallback } from "react";

const useHttp = () => {
   const  request = useCallback( async (url, method="GET", body=null, headers={"Content-type": "application/json"}) => {
        try {
            const response = await fetch(url, { method, body, headers })
            if(!response.ok) {
               throw new Error(`there is problem with ${response.status}`)
            }
            else {
                return await response.json()
            }
        }    
        catch(e) {
           console.log(e);
        }    
    }, [])
    return { request }
}

export { useHttp };
 
  