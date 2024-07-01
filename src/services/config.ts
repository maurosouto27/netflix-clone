import { Config, ImagesConfig } from "../@types/config";
import axios from "../axios.config";
import API_ROUTES from "../constants/routes";

export const getApiConfig = async (): Promise<ImagesConfig> => {
  const res = await axios.get<Config>(API_ROUTES.CONFIGURATION);
  return res.data.images;
};
