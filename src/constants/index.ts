import { DeviceType } from "../@types/general";

export const BACKDROP_SIZES: { [key in DeviceType]: string } = {
  phone: "w300",
  tablet: "w780",
  desktop: "w1280",
};

export const POSTERS_SIZES: { [key in DeviceType]: string } = {
  phone: "w154",
  tablet: "w185",
  desktop: "w342",
};
