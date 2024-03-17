import { Better, Analysis, Posts, Campaigns, Join } from "@/components/Home";
import { getInfoGeneral, getPosts } from "@/utils/firebase";
import { Post } from "@/utils/types";

export default async function Home() {
  const general = await getInfoGeneral();
  const posts = (await getPosts()) as Post[];

  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center p-3">
      <div className="my-6" />
      <Better />
      <div className="my-6" />
      {/* <Posts  /> */}
      {/* <div className="my-6" /> */}
      <Analysis />
      <div className="my-6" />
      <Campaigns />
      <div className="my-6" />
      <Join />
      <div className="my-6" />
    </main>
  );
}
