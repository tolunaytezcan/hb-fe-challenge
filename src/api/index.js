const baseURL = 'https://ttezcan-products-api.herokuapp.com/products';

export const fetchData = async () => {
  const res = await fetch(baseURL);
  const data = await res.json();
  console.log(data);
};
