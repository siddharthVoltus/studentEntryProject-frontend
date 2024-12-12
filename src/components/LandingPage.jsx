import image from "../assets/image.jpg";
import Header from "./Header";
import { useAuth } from "react-oidc-context";

export default function LandingPage() {
  const auth = useAuth();

  const clickFunction = () => auth.signinRedirect();
  return (
    <div>
      <Header details={{ txt: "sign in", fn: clickFunction }} />
      <div>
        <img
          src={image}
          alt="student-image"
          style={{ width: "100vw", height: "900px", objectFit: "fill" }}
        />
      </div>
    </div>
  );
}
