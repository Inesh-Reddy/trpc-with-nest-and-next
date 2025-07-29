"use client";

import { trpc } from "../utils/trpc";

export default function Home() {
  const todo = trpc.todo.getTodo.useQuery();

  if (!todo.data) return <div>Loading...</div>;

  return (
    <div>
      <p>Title : {todo.data.title}</p>
      <p>Description: {todo.data.description}</p>
    </div>
  );
}
