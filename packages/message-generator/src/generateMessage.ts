import { productData } from './products';

type Message = {
  messageId: string;
  timeStamp: string;
  message: string;
};

export const pickRandomProduct = () => {
  const randomIndex = Math.floor(Math.random() * productData.length);
  return productData[randomIndex];
};

export const generateMessage = (): Message => ({
  messageId: Math.random().toString(36).substring(7),
  timeStamp: new Date().toISOString(),
  message: JSON.stringify(pickRandomProduct()),
});
