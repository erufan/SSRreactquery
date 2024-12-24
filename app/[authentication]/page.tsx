import AuthForm from "@/components/AuthForm";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ authentication: "log-in" | "sign-up" }>;
}

const authenticationPage = async (props: Props) => {
  const params = await props.params;
  if (params.authentication !== "log-in" && params.authentication !== "sign-up")
    return notFound();

  return <AuthForm param={params.authentication} />;
};

export default authenticationPage;
