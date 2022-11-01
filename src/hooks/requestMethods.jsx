import { useState } from 'react';

export const useGetRequest = () => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [isLoading, setLoading] = useState(null);

   const getData = async (url, token) => {
      setLoading(true);
      setError(null);

      const response = await fetch(
         `${process.env.REACT_APP_API_BASE_URL}${url}`,
         {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token },
         }
      );
      const json = await response.json();

      if (!response.ok) {
         setLoading(false);
         setError(json.error);
      }
      if (response.ok) {
         setData(json);
         // update loading state
         setLoading(false);
      }
   };

   return { data, isLoading, error, getData };
};

export const usePatchRequest = () => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [isLoading, setLoading] = useState(null);

   const updateData = async (url, token, data) => {
      setLoading(true);
      setError(null);

      const response = await fetch(
         `${process.env.REACT_APP_API_BASE_URL}${url}`,
         {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
               'Content-type': 'application/json',
               Authorization: 'Bearer ' + token,
            },
         }
      );
      const json = await response.json();

      if (!response.ok) {
         setLoading(false);
         setError(json.error);
      }
      if (response.ok) {
         setData(json);
         // update loading state
         setLoading(false);
      }
   };

   return { data, isLoading, error, updateData };
};


export const usePostRequest = () => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [isLoading, setLoading] = useState(null);

   const addData = async (url, token, data) => {
      setLoading(true);
      setError(null);

      const response = await fetch(
         `${process.env.REACT_APP_API_BASE_URL}${url}`,
         {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
               'Content-type': 'application/json',
               Authorization: 'Bearer ' + token,
            },
         }
      );
      const json = await response.json();

      if (!response.ok) {
         setLoading(false);
         setError(json.error);
      }
      if (response.ok) {
         setData(json);
         // update loading state
         setLoading(false);
      }
   };

   return { data, isLoading, error, addData };
};