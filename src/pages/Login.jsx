import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginRequest(email, password);

      login(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Credenciais inválidas");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </div>
  );
}
