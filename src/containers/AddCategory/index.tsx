import { Heading, Text } from "../../components";
import * as yup from "yup";
import { useFormik } from "formik";

interface FormProps {
  name?: string;
  is_active?: boolean;
}

const AddCategory = () => {
  const token = localStorage.getItem("token");

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
      console.log(newCategory);
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
  return (
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
  );
};

export default AddCategory;
