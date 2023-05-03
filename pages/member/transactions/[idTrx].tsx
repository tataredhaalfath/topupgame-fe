import TransactionsDetailContent from "@/components/organisms/TransactionDetailContent";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import jwtDecode from "jwt-decode";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionsDetailContent />
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
