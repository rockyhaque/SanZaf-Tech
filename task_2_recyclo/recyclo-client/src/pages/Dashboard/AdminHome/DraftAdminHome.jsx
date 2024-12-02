// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "./../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

// const DraftAdminHome = () => {
//     const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const { data: stats } = useQuery({
//     queryKey: ["admin-stats"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin-stats");
//       return res.data;
//     },
//   });

//   const { data: chartData = [] } = useQuery({
//     queryKey: ["order-stats"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/order-stats");
//       return res.data;
//     },
//   });

//   console.log(chartData);

//   // custom shape for var chart
//   const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${
//       x + width / 2
//     },${y + height / 3}
//     ${x + width / 2}, ${y}
//     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
//       x + width
//     }, ${y + height}
//     Z`;
//   };

//   const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;
  
//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//   };
  

//   return (
//     <div>
//       <h2>
//         <span>Hi hello admin</span>
//         {user?.displayName ? user.displayName : "Back"}
//       </h2>
//       <div className="stats shadow">
//         <div className="stat">
//           <div className="stat-figure text-secondary">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="inline-block w-8 h-8 stroke-current"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               ></path>
//             </svg>
//           </div>
//           <div className="stat-title">Revenue</div>
//           <div className="stat-value">${stats?.revenue}</div>
//           <div className="stat-desc">Jan 1st - Feb 1st</div>
//         </div>

//         <div className="stat">
//           <div className="stat-figure text-secondary">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="inline-block w-8 h-8 stroke-current"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//               ></path>
//             </svg>
//           </div>
//           <div className="stat-title">Customer</div>
//           <div className="stat-value">{stats?.users}</div>
//           <div className="stat-desc">↗︎ 400 (22%)</div>
//         </div>

//         <div className="stat">
//           <div className="stat-figure text-secondary">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="inline-block w-8 h-8 stroke-current"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
//               ></path>
//             </svg>
//           </div>
//           <div className="stat-title">Orders</div>
//           <div className="stat-value">{stats?.orders}</div>
//           <div className="stat-desc">↘︎ 90 (14%)</div>
//         </div>

//         <div className="stat">
//           <div className="stat-figure text-secondary">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="inline-block w-8 h-8 stroke-current"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
//               ></path>
//             </svg>
//           </div>
//           <div className="stat-title">Inventory</div>
//           <div className="stat-value">{stats?.productItems}</div>
//           <div className="stat-desc">↘︎ 90 (14%)</div>
//         </div>
//       </div>
//       {/* chart */}
//       <div className="flex">
//         <div className="w-1/2">
//           <BarChart
//             width={500}
//             height={300}
//             data={chartData}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="category" />
//             <YAxis />
//             <Bar
//               dataKey="quantity"
//               fill="#8884d8"
//               shape={<TriangleBar />}
//               label={{ position: "top" }}
//             >
//               {chartData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//               ))}
//             </Bar>
//           </BarChart>
//         </div>
//         <div className="w-1/2"></div>
//       </div>
//     </div>
//   );
// };

// export default DraftAdminHome;