import React from "react";

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterCredentialsDTO, login, register } from "../features/auth";
import { LoginCredentialsDTO } from "../features/auth";

import { UserProfile } from "./type";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (data: RegisterCredentialsDTO, toast: any) => void;
  loginUser: (data: LoginCredentialsDTO, toast: any) => void;
  isLoggedIn: () => boolean;
  logout: () => void;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + token);
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    registerData: RegisterCredentialsDTO,
    toast: any
  ) => {
    try {
      const response = await register(registerData);

      localStorage.setItem("token", response?.token);

      const userObject = {
        userName: response?.userName,
        email: response?.email
      }

      localStorage.setItem("user", JSON.stringify(userObject));

      setToken(response?.token);
      setUser(userObject!);

      toast({
        title: "Registration Status",
        description: "You have successfully registered.",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      navigate("/");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);

      toast({
        title: 'Registration Error',
        description: errorMessage,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const loginUser = async (
    loginData: LoginCredentialsDTO,
    toast: any
  ) => {
    try {
      const response = await login(loginData);

      localStorage.setItem("token", response?.token);

      const userObject = {
        userName: response?.userName,
        email: response?.email
      }

      localStorage.setItem("user", JSON.stringify(userObject));

      setToken(response?.token);
      setUser(userObject!);

      toast({
        title: "Login Status",
        description: "You have successfully logged in.",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      navigate("/");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);

      toast({
        title: 'Login Error',
        description: errorMessage,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, token, registerUser, loginUser, isLoggedIn, logout }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);