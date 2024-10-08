import { getUserAction } from "@/action/auth.action";
import { PostForm } from "@/components/post/post-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create",
};

export default async function Createpage() {
  const { avatarUrl, username, name } = await getUserAction();

  return (
    <main>
      <section className="flex items-center gap-2 mb-5">
        <div className="w-10 h-10 rounded-full">
          <img
            src={avatarUrl}
            alt={username}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h4 className="font-bold ">{name}</h4>
          <p className="text-sm text-white/65">{username}</p>
        </div>
      </section>
      <PostForm />
    </main>
  );
}
