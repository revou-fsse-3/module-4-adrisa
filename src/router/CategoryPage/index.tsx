import { Navigate } from "react-router-dom";
import { Card, Input } from "../../components";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const token = localStorage.getItem("token");
  const [categories, setProduct] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch("https://dummyjson.com/product?limit=10");
    const data = await response.json();
    setProduct(data.products);
    console.log(data.product);
  };
  console.log(categories);
  useEffect(() => {
    fetchCategories();
  }, []);

  if (token) {
    return (
      <Card>
        <Card>
          <div>
            <label>Title</label>
            <input />
            <label>Price</label>
            <input />
            <button type="submit">submit</button>
          </div>
        </Card>
        <Card>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* {categories.map((category) => {
                return <td>{category}</td>;
              })} */}
            </tbody>
          </table>
        </Card>
      </Card>
    );
  }
  return <Navigate to="/sign-in" />;
};

export default CategoryPage;
