interface ProductProps {
    name: string;
    imgUrll: string;
    price: number;
}
export default function Product({name, imgUrll, price}: ProductProps){
    return(
        <div>
            <h2>{name}</h2>
                <img src={imgUrll} alt={name} width="320" />
                <p>Price: {price} credits</p>
        </div>
    );
}