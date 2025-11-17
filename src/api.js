export async function login(data) {
  const res = await fetch("http://localhost:3000/trainees/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Login failed");

  return res.json();
}

export async function signup(data) {
  const res = await fetch("http://localhost:3000/trainees/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Signup failed");

  return res.json();
}
