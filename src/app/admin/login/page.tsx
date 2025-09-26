"use client";

import { toast } from "react-toastify";
import styles from "./page.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/app/context/Auth";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext is not available");
  }
  const { login } = authContext;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //console.log(data);
    const res = await fetch("http://localhost:8000/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (result.status == false) {
      toast.error(result.message);     
    } else {
      // store user info in local storage
      const userInfo = {
        id: result.id,
        token: result.token
      }

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      login(result.token);
      router.push('/admin/dashboard');
    }
    console.log(result);

  } 
  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h4 className={styles.title}>Login Here</h4>

              <div className={styles.formGroup}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className={`${styles.input} ${
                    errors.email ? styles.invalid : ""
                  }`}
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className={styles.error}>{errors.email?.message}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className={`${styles.input} ${
                    errors.password ? styles.invalid : ""
                  }`}
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password?.message}</p>
                )}
              </div>

              <button type="submit" className={styles.button}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
