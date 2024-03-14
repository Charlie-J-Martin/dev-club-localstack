type Message = {
  messageId: string;
  timeStamp: string;
  message: string;
};

export const generateMessage = (): Message => ({
  messageId: Math.random().toString(36).substring(7),
  timeStamp: new Date().toISOString(),
  message: 'SQS MESSAGES ARE COOL!',
});
