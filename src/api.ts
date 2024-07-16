// src/api.ts
import axios from 'axios';

export const BASE_URL = 'https://content.smartercrowdsourcing.org/';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchHomePage = async () => {
  const response = await api.get('/items/smc_hp');
  return response.data.data;
};

export const fetchProjects = async () => {
  const response = await api.get('/items/smc_projects');
  console.log(response.data.data);
  return response.data.data;
};

export const fetchPartners = async () => {
  const response = await api.get('/items/smc_partner');
  return response.data.data;
};

// Add more API calls as needed