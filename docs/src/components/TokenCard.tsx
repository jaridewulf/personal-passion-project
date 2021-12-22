import { useState, useEffect, FC } from "react";
import axios from 'axios';

interface TokenCardProps {
    uri: string;
}

interface Token {
    name: string,
    image: string
}

type Car = {
    bumper: string,
    chasis: string,
    doorhandle: string,
    headlight: string,
    horsepower: number,
    shadows: string,
    taillight: string,
    topspeed: number,
    transmission: number,
    wheels: string,
    windows: string
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
                let tempCar:Car = {
                    bumper: "unknown",
                    chasis: "unknown",
                    doorhandle: "unknown",
                    headlight: "unknown",
                    horsepower: 0,
                    shadows: "unknown",
                    taillight: "unknown",
                    topspeed: 0,
                    transmission: 0,
                    wheels: "unknown",
                    windows: "unknown"
                }
                result.data.attributes.forEach((attribute:{value: any, trait_type: string}) => {
                    (tempCar as any)[attribute.trait_type] = attribute.value;
                });
                setCarProps(tempCar);
                console.log(carProps);
            }
        })();
    }, []);

    return (
        <>
        {data && carProps ? 
        <div>
            <h2>{data.name}</h2>
            <img src={data.image} alt={data.name + " image"} />
            <h3>Specs</h3>
            <ul>
                <li><strong>Top speed</strong> {carProps.topspeed}</li>
                <li><strong>Horsepower</strong> {carProps.horsepower}</li>
                <li><strong>Transmission</strong> {carProps.transmission}</li>
            </ul>
            {/*carProps.map(carProp => <p><strong>{carProp.trait_type}</strong> {carProp.value}</p>)*/}
        </div>
         : <p>loading...</p>}
        </>
        );
}

export default TokenCard;