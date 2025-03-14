import { useEffect, useState } from "react";
import { signUp, signIn } from "../services/authService";

const AuthForm = ({ isLogin: initialIsLogin = true ,onSuccess}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(initialIsLogin);


  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(email, password);
        onSuccess?.(); // Call the success handler
      } else {
        await signUp(email, password);
        setIsLogin(true); // Switch to login form after successful signup
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5">
      <div className="w-full max-w-md p-8 rounded-lg bg-n-6">
        <h2 className="text-2xl font-bold text-n-1 mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 rounded bg-n-7 text-n-1"
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 rounded bg-n-7 text-n-1"
            required 
          />
          <button 
            type="submit"
            className="w-full py-3 px-6 rounded bg-color-1 text-n-1 hover:bg-opacity-90"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <button 
          onClick={() => setIsLogin(!isLogin)}
          className="w-full mt-4 text-n-1 hover:text-color-1"
        >
          {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
