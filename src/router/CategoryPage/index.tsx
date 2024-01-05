import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heading, Text } from "../../components";
import * as yup from "yup";
import { useFormik } from "formik";

interface FormProps {
  name?: string;
  is_active?: boolean;
}
interface Category {
  id: string;
  name: string;
  is_active: boolean;
}

const CategoryPage = () => {
  const token = localStorage.getItem("token");
  const [categories, setProduct] = useState([]);
  const fetchCategories = async () => {
    const response = await fetch("https://mock-api.arikmpt.com/api/category", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setProduct(data.data);
    // console.log(data.data.name);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = (id: string) => async () => {
    try {
      const response = await fetch(
        `https://mock-api.arikmpt.com/api/category/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(deleteCategory);
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateCategory = async (data: FormProps) => {
    try {
      const response = await fetch(
        "https://mock-api.arikmpt.com/api/category/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: data.name,
            is_active: data.is_active,
          }),
        }
      );

      const newCategory = await response.json();
      fetchCategories();
      console.log(newCategory);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id: string) => async () => {
    try {
      const response = await fetch(
        `https://mock-api.arikmpt.com/api/category/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const getCategory = await response.json();

      console.log(getCategory);
    } catch (error) {
      console.log(error);
    }
  };

  const formMik = useFormik({
    initialValues: {
      name: "",
      is_active: true,
    },
    onSubmit: (values, { resetForm }) => {
      onCreateCategory(values);
      resetForm();
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      is_active: yup.boolean().required(),
    }),
  });
  const { errors, values, handleChange, handleSubmit } = formMik;
  const { name, is_active } = values;

  if (token) {
    return (
      <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Heading title="Ayo sini absen ngab!" />
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    value={name}
                    name="name"
                    type="text"
                    onChange={handleChange("name")}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                {errors.name && <Text>{errors.name}</Text>}
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Aktif GAK?
                </label>
                <div className="mt-2">
                  <label>
                    Aktip
                    <input
                      value="true"
                      name="is_active"
                      type="radio"
                      onChange={handleChange("is_active")}
                      checked={is_active}
                      className=""
                    />
                  </label>
                  <label>
                    Gaks
                    <input
                      value="false"
                      name="is_active"
                      type="radio"
                      onChange={handleChange("is_active")}
                      checked={is_active}
                      className=""
                    />
                  </label>
                </div>
                {errors.is_active && <Text>{errors.is_active}</Text>}
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Anggota Geng Asbak Maju
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {categories.map((category: Category, id) => {
                return (
                  <div key={category.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        alt={`monster ${category.name}`}
                        src={`https://robohash.org/${id}?set=set2&size=180x180`}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          ID: {category.id}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Nama: {category.name}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {category.is_active}
                      </p>
                    </div>

                    <div className="action-group">
                      <button onClick={handleEdit(category.id)}>Edit</button>
                      <button onClick={handleDelete(category.id)}>Pecat</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
  return <Navigate to="/sign-in" />;
};

export default CategoryPage;
