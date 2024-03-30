export default function ProductItems({ params }:
    {
        params: { productid: string }
    }) {
    return (
        <h1>Products details {params.productid}</h1>
    );
}


