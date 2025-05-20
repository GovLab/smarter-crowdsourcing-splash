// src/api.ts
import axios from 'axios';

export const BASE_URL = 'https://directus.theburnescenter.org/';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchHomePage = async () => {
  const response = await api.get('/items/smc_hp?fields=*.*');
  return response.data.data;
};
