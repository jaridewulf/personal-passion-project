import { useState, useEffect, FC } from "react";
import axios from 'axios';

interface TokenCardProps {
    uri: string;
}

interface Token {
    name: string,
    image: string
}

interface Car {
    horsepower: number,
    topspeed: number,
    transmission: number
}

const TokenCard: FC<TokenCardProps> = ({ uri }) => {
    const [data, setData] = useState<Token>();
    const [carProps, setCarProps] = useState<Car>();

    useEffect(() => {
        (async () => {
            if (uri) {
                const result = await axios(
                    uri,
                );
                setData(result.data);
                setCarProps(result.data.attributes);
                console.log(result.data);
            }
        })();
    }, []);

    return (
        <>
        {data ? 
        <div>
            <img src={data.image} alt="" />
            <p>{data.name}</p>
            <p></p>
        </div>
         : <p>loading...</p>}
        </>
        );
}

export default TokenCard;