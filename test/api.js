async function fetchData(){
    // try{
    //     const response = await fetch('http://localhost:3001/users')
    //     if(!response){
    //         throw new Error('failed to fetch')
    //     }
    //     const data = response.json()
    //     return data;
    // }catch(err){throw err;}
    return {
        getAllUsers : [{"id":"a",
                            "name":"a","email":"p","password":"d"
        }]
    }
};
module.exports =fetchData;