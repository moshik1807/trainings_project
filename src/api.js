import { toast } from "react-toastify";

export async function login(data) {
  try {
    const res = await fetch("http://localhost:3000/trainees/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Login failed");
    }

    return res.json();
  } catch (err) {
    toast.error(err.message);
    throw err;
  }
}

export async function signup(data) {
  try {
    const res = await fetch("http://localhost:3000/trainees/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Signup failed");
    }

    const result = await res.json();

    return result;
  } catch (err) {
    toast.error(err.message);
    throw err;
  }
}
