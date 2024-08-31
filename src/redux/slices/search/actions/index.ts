import { createAsyncThunk } from '@reduxjs/toolkit';
import geocodingApi from '../../../../services/endpoints/geocoding/geocodingApi';

const getCoordinates = createAsyncThunk('search/getCoordinates', async (value: string) => {
  const data = await geocodingApi.getCoordinates(value);

  return data;
});

export default getCoordinates;
