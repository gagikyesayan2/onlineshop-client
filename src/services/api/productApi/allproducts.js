
import axios from 'axios';
import api from './api';

export const getAllProducts = async () => {
  const response = await api.get('/getAllProducts');
  return response.data;
};

