"use client";

import { logoutAction } from "@/action/auth.action";
import { useTransition } from "react";

export function LogoutButton() {
  const [isLoading, setTransition] = useTransition();

  function clickHandler() {
    setTransition(async () => {
      await logoutAction();
    });
  }
  return (
    <button
      disabled={isLoading}
      onClick={clickHandler}
      className="btn-error btn btn-sm"
    >
      {isLoading && <span className="loading loading-sm" />}
      Log out
    </button>
  );
}
