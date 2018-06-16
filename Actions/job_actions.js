import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
  FETCH_JOBS
} from './types'

const GITHUB_BASE_URL = 'https://jobs.github.com/positions.json?';
 
export const fetchJobs = ({longitude, latitude}, callback) =>  async (dispatch) => {
  try {
    const url = `${GITHUB_BASE_URL}lat=${latitude}&long=${longitude}`;

    let {data} = await axios.get(url);

    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (err) {
    console.log("Something went wrong... ", err);
  }
}
