import OverViewContent from "@/components/organisms/OverViewContent";
import SideBar from "@/components/organisms/SideBar";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import jwtDecode from "jwt-decode";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverViewContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}
// server side process
export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/players/${userFromPayload.avatar}`;
  return {
    props: {
      user: userFromPayload,
    },
  };
}
