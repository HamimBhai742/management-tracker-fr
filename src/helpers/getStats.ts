/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { baseUrl } from "@/hooks/useAxiosSecure";
import { token } from "@/hooks/useToken";
import { useQuery } from "@tanstack/react-query";

const getStats = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/project/stats`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!res.ok) throw new Error("Project not found");
      const result = await res.json();
      console.log(result);
      return await result?.data;
    },
  });
  return { data, isLoading, error, refetch };
};

export default getStats;
