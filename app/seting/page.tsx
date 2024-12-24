import { verifyAuth } from "@/lib/auth";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

const SettingsPage = async () => {
  const { user, session } = await verifyAuth();

  if (!user || !session) redirect("/log-in");
  const isAdmin = (await sql`SELECT * FROM todousers WHERE id = ${user.id}`)
    .rows[0].isadmin;

  if (!isAdmin)
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <p className="text-center text-lg font-bold text-gray-800">
          only admins can see this page.
        </p>
      </div>
    );

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <p className="text-center text-lg font-bold text-gray-800">
        This is a Setting Page.
      </p>
    </div>
  );
};

export default SettingsPage;
