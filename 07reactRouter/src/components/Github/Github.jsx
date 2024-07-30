import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github () {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //     setData(data)
    //     })
    // }, [])
    return (
        <div className="bg-orange-400 text-black py-3 px-3 text-center">Github Followers: {data.followers}
        <img width={200} src={data.avatar_url}/>
         </div>
    )
}

export default Github

export const githubDataLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}