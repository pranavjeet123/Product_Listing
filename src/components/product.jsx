import useFetch from "../hooks/useFetch";

export const Product = ({id}) => {
const url ="https://dummyjson.com/products/"+id;

const {data, loading, error} = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

    return (
        <>
<h1>{data.title}</h1>
<div>
    <img src={data.images[0]} alt={data.title} width="300" />
    <p>{data.description}</p>
    <p>Price: ${data.price.toFixed(2)}</p>
    <p>Brand: {data.brand}</p>
    <p>Category: {data.category}</p>
</div>


        </>
    )
}