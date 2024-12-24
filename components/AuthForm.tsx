"use client";

import isValidCredential from "@/util/auth/isValidCredential";
import UserCredentials, {
  UserCredentialErrors,
} from "@/interface/UserCredential";
import Link from "next/link";
import { login, signup } from "@/server/actions/auth";
import Form from "./ui/Form";
import { useActionState } from "react";

interface Props {
  param: "log-in" | "sign-up";
}

const AuthForm = ({ param }: Props) => {
  const authAction = param === "sign-up" ? signup : login;
  const [formState, formAction] = useActionState(
    authAction,
    {} as UserCredentialErrors
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const userCredentials: UserCredentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    if (param === "sign-up") {
      userCredentials.username = formData.get("username") as string;
    }
    formAction(userCredentials);
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Form name={param} action={handleSubmit} className="flex flex-col">
        <Form.Input
          type="email"
          id="email"
          name="email"
          aria-label="email"
          required
        />
        {param === "sign-up" && (
          <Form.Input
            type="text"
            name="username"
            aria-label="username"
            required
          />
        )}
        <Form.Input
          type="password"
          name="password"
          aria-label="password"
          required
        />
        <Form.Button type="submit" className="login-form-button">
          {param === "sign-up" ? "Sign Up" : "log In"}
        </Form.Button>
        <div className="flex justify-center">
          {param === "sign-up" ? (
            <Link href="/log-in">already have account?</Link>
          ) : (
            <Link href="/sign-up">create an account</Link>
          )}
        </div>
      </Form>
      {!isValidCredential(formState) &&
        Object.keys(formState).map((error) => (
          <p key={error} className="mt-4 text-red-700">
            {formState[error as keyof UserCredentialErrors]}
          </p>
        ))}
    </div>
  );
};

export default AuthForm;
