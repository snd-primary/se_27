import dayjs from "dayjs";
import { sprinkles } from "@css-utils";

export const PostDate = ({ date }: { date: string }) => {
  return (
    <div
      className={sprinkles({
        fontSize: "sm",
        color: "white",
      })}
    >
      {dayjs(date).locale("ja").format("YYYY/MM/DD")}
    </div>
  );
};
