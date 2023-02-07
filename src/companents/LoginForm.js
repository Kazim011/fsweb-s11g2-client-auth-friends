import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:9000/api/login", data)
      .then((res) => console.log(JSON.stringify(res.data.token)))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="username"
            {...register("username", { required: "Bu alan zorunludur." })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: "Bu alan zorunludur." })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
