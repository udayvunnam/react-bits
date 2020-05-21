import React from 'react';
import { useFetch } from './index';
import './index.css';

export const ImageFetchDemo = () => {
  const { loading, error, response } = useFetch('https://dog.ceo/api/breeds/image/random');

  if (loading) {
    return <div>...Loading</div>
  }
  if (error) {
    return <div>Oops! Error</div>
  }
  return (
    <img src={response.message} alt="avatar" className="random-image" />
  )
}
