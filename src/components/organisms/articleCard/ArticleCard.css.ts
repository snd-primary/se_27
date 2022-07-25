import { style } from "@vanilla-extract/css";
import { sprinkles } from "@css-utils/sprinkles.css";

export const Card = style([
  sprinkles({
    background: { darkMode: "black" },
    borderRadius: "size-1",
    padding: "size-0.5",
    borderColor: "sub",
  }),
  {
    borderWidth: 1,
    borderStyle: "solid",
  },
]);

export const Captions = style([
  sprinkles({ borderColor: "sub", paddingY: "size-2", paddingX: "size-1" }),
  {
    borderWidth: 1,
    color: "white",
    borderStyle: "solid",
  },
]);

export const Tag = style([
  sprinkles({
    // background: { darkMode: "black" },
    // color: { darkMode: "black" },
    display: "inline-block",
    paddingX: "size-1",
    paddingY: "size-4",
    fontSize: "sm",
    fontWeight: "bold",
    borderRadius: "size-1",
  }),
]);

export const PostTitle = style([
  sprinkles({
    marginTop: "size-1",
    fontSize: "base",
    minHeight: "size-12",
    maxHeight: "size-12",
    // color: { darkMode: "black" },
    maxWidth: "size-full",
    transition: "easing",
    textDecoration: "none",
  }),
  {
    overflowX: "hidden",

    selectors: {
      "&:hover": {
        color: "red",
      },
    },
  },
]);
