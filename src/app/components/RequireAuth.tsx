"use client";

import { useContext, ReactNode, useEffect } from "react";
import { AuthContext } from "../context/Auth";
import { useRouter } from "next/navigation";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth?.loading && !auth?.user) {
      router.push("/admin/login");
    }
  }, [auth?.loading, auth?.user, router]);

  if (auth?.loading) {
    return <p>Loading...</p>; // or a spinner
  }

  if (!auth?.user) {
    return null; // Prevents flashing children before redirect
  }

  return <>{children}</>;
};

export default RequireAuth;
