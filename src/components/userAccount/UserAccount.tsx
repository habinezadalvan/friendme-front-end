import "./userAccount.css";
import { ArrowRightAlt } from "@mui/icons-material";
import { ReactHTMLElement } from "react";

type UserAccountProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function UserAccount({ children }: UserAccountProps) {
  return (
    <div className="userAccount">
      <div className="userAccountWrapper">{children}</div>
    </div>
  );
}
