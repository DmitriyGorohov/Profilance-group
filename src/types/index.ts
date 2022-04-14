import { IAdmin, IUser, New } from "../redux/types";
import { v4 as uuidv4 } from "uuid";

export enum WebsiteUrls {
  HOME = "/",
  NEWS = "/news",
}

export enum SvgId {
  LOGO = "logo",
  OK = "ok",
}

export const admin: IAdmin = {
  name: "Admin",
  password: "admin",
};

export const user: IUser = {
  name: "User",
  password: "user",
};

export const news: New[] = [
  {
    id: uuidv4(),
    title: "Material UI",
    description:
      "Components UI lorem lorem lorem lorem lorem lorem lorem lorem",
    time: new Date().toLocaleString(),
    approved: true,
  },
  {
    id: uuidv4(),
    title: "Next.js",
    description: "Apollo/Client SSR",
    time: new Date().toLocaleString(),
    approved: true,
  },
  {
    id: uuidv4(),
    title: "Redux",
    description: "redux thunk and redux toolkit, react-redux",
    time: new Date().toLocaleString(),
    approved: true,
  },
  {
    id: uuidv4(),
    title: "React",
    description: "react nice!!!",
    time: new Date().toLocaleString(),
    approved: true,
  },
  {
    id: uuidv4(),
    title: "Style-Components",
    description: "styles for CSS",
    time: new Date().toLocaleString(),
    approved: true,
  },
  {
    id: uuidv4(),
    title: "Typescript",
    description: "very very Typescript",
    time: new Date().toLocaleString(),
    approved: true,
  },
  {
    id: uuidv4(),
    title: "Router-DOM",
    description: "react-router-dom !!!!!!",
    time: new Date().toLocaleString(),
    approved: false,
  },
  {
    id: uuidv4(),
    title: "Scss",
    description: "style module scss",
    time: new Date().toLocaleString(),
    approved: false,
  },
  {
    id: uuidv4(),
    title: "React icons",
    description: "Icons and react nice!))",
    time: new Date().toLocaleString(),
    approved: false,
  },
];
