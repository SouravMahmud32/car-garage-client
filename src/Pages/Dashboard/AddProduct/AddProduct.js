import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageHostKeys = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKeys);

  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKeys}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            name: data.name,
            price: data.price,
            phone: data.phone,
            description: data.description,
            buying: data.buying,
            condition: data.condition,
            image: imgData.data.url,
          };

          fetch("https://y-lovat-alpha.vercel.app/advirtise", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/advirtise");
            });
        }
      });
  };

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add a Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name")}
            className="select select-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            {...register("price", { required: "Email Address is required" })}
            className="select select-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <input
            type="text"
            {...register("condition", {
              required: "Email Address is required",
            })}
            className="select select-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            {...register("phone", { required: "Email Address is required" })}
            className="select select-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", { required: "Email Address is required" })}
            className="select select-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Buying Year</span>
          </label>
          <input
            type="text"
            {...register("buying", { required: "Email Address is required" })}
            className="select select-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            {...register("discription", {
              required: "Email Address is required",
            })}
            className="textarea textarea-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Photo is required" })}
            className="select select-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn btn-outline w-full mt-4"
          value="Add Product"
          type="submit"
        />
        {errors.img && <p className="text-red-600">{errors.img?.message}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
