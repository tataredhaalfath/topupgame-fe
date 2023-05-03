import Input from "@/components/atoms/Input";
import SideBar from "@/components/organisms/SideBar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { updateProfile } from "@/services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function EditProfile() {
  const [imagePreview, setImagePreview] = useState(null);

  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
    phoneNumber: "",
  });

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userFromPayload.avatar = `${IMG}/players/${userFromPayload.avatar}`;
      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();

    data.append("image", user.avatar);
    data.append("name", user.name);
    data.append("phoneNumber", user.phoneNumber);
    data.append("email", user.email);

    const response = await updateProfile(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Profil berhasil diperbarui");
      setTimeout(() => {
        Cookies.remove("token")
        router.push("/sign-in");
      }, 1500);
    }
  };
  return (
    <section className="edit-profile overflow-auto">
      <SideBar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20 ">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="icon upload"
                      style={{
                        objectFit: "cover",
                        borderRadius: "100%",
                        height: 90,
                        width: 90,
                      }}
                      width={90}
                      height={90}
                    />
                  ) : (
                    <img
                      src={user.avatar}
                      width={90}
                      height={90}
                      className="avatar img-fluid"
                      style={{
                        objectFit: "cover",
                        borderRadius: "100%",
                        height: 90,
                        width: 90,
                      }}
                    />
                  )}
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center ">
                    {/* <img src="/icon/delete.svg" alt="icon upload" /> */}
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <img
                      src="/icon/upload.svg"
                      className="rounded-circle"
                      alt="icon upload"
                      width={90}
                      height={90}
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const img: any = e.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({ ...user, avatar: img });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input label="Username" value={user.username} disabled />
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Phone"
                  value={user.phoneNumber}
                  onChange={(e) =>
                    setUser({ ...user, phoneNumber: e.target.value })
                  }
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  type="button"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
