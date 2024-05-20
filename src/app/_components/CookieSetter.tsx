"use client";

import { useRouter } from "next/navigation";

function CookieSetter() {
  const { refresh } = useRouter();

  const clickHandler = async () => {
    await fetch(new URL("/api/set-token", location.origin), {
      method: "POST",
      credentials: "include",
    });

    refresh();
  };

  return (
    <button
      onClick={clickHandler}
      className="flex mx-auto bg-neutral-800 text-white px-4 py-3 rounded-md hover:bg-neutral-700 active:bg-neutral-900 transition-colors duration-300"
    >
      Click To Set Cookie And Refresh
    </button>
  );
}

export default CookieSetter;
