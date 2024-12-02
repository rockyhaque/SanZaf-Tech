import useAuth from "../../../hooks/useAuth";
import PaymentHistory from "../PaymentHistory/PaymentHistory";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      {/* cover img */}
      <div className="h-44">
        <div
          className="bg-no-repeat h-44 object-left-top"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/Fx5BRBg/oie-d2s-Lyjc-Bt-NVE.jpg)",
          }}
        >
          <div className="relative top-10 left-14">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          <div className="relative bottom-10 left-44 text-customWhite font-bold text-xl">
            {user?.displayName ? user.displayName : "Back"}
          </div>
          <div className="relative bottom-10 left-44 text-customWhite">
            <h1>User</h1>
          </div>
        </div>
      </div>

      <PaymentHistory></PaymentHistory>
    </div>
  );
};

export default UserHome;
