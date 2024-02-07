import { setToken } from "@/actions/auth/client";
import { getUsers } from "@/actions/users/users";
import { Button } from "../ui/button";
import UpdateUserButton from "./UpdateUserButton";

export default async function DevUsersList() {
  const users = await getUsers();
  return (
    <div className="flex flex-col gap-1">
      {users.map((user) => (
        <UpdateUserButton
          key={user.id}
          displayName={user.displayName}
          userId={user.id}
        />
      ))}
    </div>
  );
}
