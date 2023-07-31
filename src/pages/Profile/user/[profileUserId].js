import ChangeEmail from "@/components/profile/changeEmail";
import EditProfile from "@/components/profile/editProfile";
import Layout from "@/container/layout";

const ProfileUserId = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
        {/* edit */}
        <EditProfile />
        {/* email and pass */}
        <ChangeEmail />
      </div>
    </Layout>
  );
};

export default ProfileUserId;
