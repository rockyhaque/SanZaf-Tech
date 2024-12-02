import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments/${user.email}`);
      return res.data;
    },
  });


    // Date From DB
    function formatDateTime(dateTimeString) {
      var dateTime = new Date(dateTimeString);
  
      var formattedDate = dateTime.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
      });
  
      var formattedTime = dateTime.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
      });
  
      return formattedDate + ' ' + formattedTime;
  }
  

  return (
    <div>
      <SectionTitle heading="My Payment History"></SectionTitle>
      <div className="border border-neutral-400 rounded-lg px-4 py-8">
      {/* <h2 className="text-3xl">Total Payments: {payments.length}</h2> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{formatDateTime(payment.date)}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.price}</td>
                <td className="text-customOrange cursor-wait">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default PaymentHistory;
