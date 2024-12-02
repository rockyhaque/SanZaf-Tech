// import { useEffect, useState } from "react";

import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useService = () => {
  const axiosPublic = useAxiosPublic();
  // const [service, setService] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://recyclo-server.vercel.app/service")
  //     .then((res) => res.json())
  //     .then(data => {
  //       setService(data);
  //       setLoading(false);
  //       })
  // }, []);

  const {
    data: service = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axiosPublic.get("/service");
      return res.data;
    },
  });

  return [service, loading, refetch];
};

export default useService;
