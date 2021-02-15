import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux'

const useApi = (props) => {
    const {amadeusclientid, amadeusclientsecrate, amadeusgranttype, amadeustoken} = useSelector(state => state.preferences);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!props.url) return;

        let url = props.usefullurl ? props.url : "https://test.api.amadeus.com/v2/shopping/"+props.url;

        const fetchData = async () => {

            let configs = {
                method: props.method ? props.method : "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
                }
            };
            if (props.useaccesstoken) {
                configs.headers = {
                    "Authorization": `Bearer ${amadeustoken}`
                };
            }

            let defaultbody = {
                client_id: amadeusclientid,
                client_secret: amadeusclientsecrate,
                grant_type: amadeusgranttype
            }

            // if (props.usegranttype){
            //     defaultbody.grant_type = amadeusgranttype;
            // }

            if (props.method === "POST"){
                var formBody = [];
                for (let fd in defaultbody) {
                    let encodedKey = fd;
                    let encodedValue = defaultbody[fd];
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                configs.body = formBody.join("&");
            }

            try {
                const response = await fetch(url, configs);
                const data = await response.text();
                if (data.error){
                    setError(JSON.parse(data));
                }
                else {
                    setData(JSON.parse(data));
                }
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [props.url]);

    return { loading, error, data };
};

export default useApi;
