import axios from 'axios'
import React, {  useState } from 'react'

const useFetch = () => {
    const [data, setApiData] = useState(null);

    const extractDataFromApi = async (url, payload = "", method) => {
        switch (method) {
            case "GET": {
                try {
                    const resp = await axios.get(url);
                    const data = await resp?.data;
                    data.errors = ''
                    setApiData(data);
                } catch (error) {
                    console.warn("error occured")
                    data.errors = error
                    setApiData(data)
                }
            }
                break;
            case "POST": {
                console.log("post", payload)
                try {
                    const resp = await axios.post(url, payload, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    const data = await resp?.data;
                    data.errors = ''
                    setApiData(data);
                } catch (error) {
                    console.warn(error)
                    data.errors = error
                    setApiData(data)
                }
            }
                break;
            case "PUT": {
                try {
                    const resp = await axios.put(url, payload, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    const data = await resp?.data;
                    data.errors = ''
                    setApiData(data);
                } catch (error) {
                    console.warn(error)
                    data.errors = error
                    setApiData(data)
                }
            }
                break;
            case "DELETE": {
                try {
                    const resp = await axios.delete(url, payload, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    const data = await resp?.data;
                    data.errors = ''
                    setApiData(data);
                } catch (error) {
                    console.warn(error)
                    data.errors = error
                    setApiData(data)
                }
            };
                break;
            default: {
                console.warn("default")
            }
        }
    }
    // console.log("use",data)
    return { data, extractDataFromApi }
}


export default useFetch