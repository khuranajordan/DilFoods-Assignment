import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { RxCross1 } from "react-icons/rx";
import "./add.scss";
import axios from "axios";

interface AddProps {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = ({ slug, columns, setOpen }: AddProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    slug = slug === "users" ? "userRows" : slug;
    const response = await axios.post(`/api/${slug}`, formData);
    console.log({ response });
    setOpen(false);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          <RxCross1 width={30} height={30} />
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label htmlFor={column.field}>{column.headerName}</label>
                <input
                  type={column.type}
                  id={column.field}
                  name={column.field}
                  placeholder={column.field}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
