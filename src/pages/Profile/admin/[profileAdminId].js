import ChangeEmail from "@/components/profile/changeEmail";
import EditProfile from "@/components/profile/editProfile";
import InformationAccount from "@/components/profile/information";
import Layout from "@/container/layout";

const ProfileAdmin = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1  lg:grid-cols-2  gap-x-10 gap-y-6 pb-6">
        {/* edit */}
        <EditProfile />
        {/* inf*/}
        <InformationAccount />
        {/* email and pass */}
        <ChangeEmail />
      </div>
    </Layout>
  );
};

export default ProfileAdmin;
