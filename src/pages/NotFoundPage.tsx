import { Link } from "react-router";
import { Button } from "../components/ui/button";
const NotFoundPage = () => {
  return (
    <div>
      This page does not exist!
      <Link to={"/"}>
        <Button>Go back</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
