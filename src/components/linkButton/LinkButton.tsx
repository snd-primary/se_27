import Link from "next/link";
import * as React from "react";
import { sprinkles } from "../../css-utils/sprinkles.css";

type Props = {
  url: string | null;
  text: string | null;
  buttonDisplay: "none" | "block";
};

const Button: React.FC<Props> = (props) => {
  return (
    <div
      className={sprinkles({
        textAlign: "center",
        marginX: "size-8",
        marginY: "size-8",
      })}
      style={{ display: props.buttonDisplay }}
    >
      <Link href={`/${props.url}`} passHref>
        <a
          className={sprinkles({
            textDecoration: "none",
            color: { lightMode: "white", darkMode: "black" },
            textAlign: "center",
            paddingX: "size-5",
            paddingY: "size-3",
            maxWidth: "size-11/12",
            background: { lightMode: "black", darkMode: "white" },
            cursor: "pointer",
            fontSize: "xl",
            borderRadius: "size-1.5",
            fontWeight: "bold",
          })}
        >
          {props.text}
        </a>
      </Link>
    </div>
  );
};

const LinkButton: React.FC<Props> = React.memo(function LinkButtonMemo(props) {
  return (
    <>
      <Button
        url={props.url}
        text={props.text}
        buttonDisplay={props.buttonDisplay}
      />
    </>
  );
});

export default LinkButton;
