import React, {useState, useEffect} from 'react'
import axios from 'axios'

export function useAxiosGet(url)
{
    const [request, setRequest] = useState({ //여러개는 중괄호
        loading:false,
        data:null,
        error :false
    })

    useEffect(()=>{
        //data 넘어오기 전
        setRequest({
            loading:true,
            data:null,
            error :false
        })

        axios.get(url)
        .then(response =>{
            //data 넘어 왔을때
            setRequest(
            {
                loading : false,
                data : response.data
            }
            )
        }).catch(() =>{
            setRequest({
                loading : false,
                data:null,
                error:true
            })
        })
    }, [url]) // url이 바뀔 때만 effect를 재실행합니다.

    return request
}