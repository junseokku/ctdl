import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";

type Tasks = Array<{ title: string; status: "PENDING" | "DONE" }>;

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  // insert if not exists
  const { data } = await supabase
    .from("daily_study")
    .select("id")
    .returns<Array<{ id: string }>>();

  const id = data?.[0]?.id;

  // data 없을때 에러 처리

  const response = await supabase
    .from("tasks")
    .select("title, status")
    .eq("daily_study_id", id)
    .returns<Tasks>();

  if (response.error) {
    redirect("/error");
  }

  return (
    <ul>
      {response?.data?.map(({ title, status }) => (
        <li key={title}>{`[${status}] - ${title}`}</li>
      ))}
    </ul>
  );
}
