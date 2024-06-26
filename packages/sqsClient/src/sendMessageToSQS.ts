import { SendMessageCommand } from '@aws-sdk/client-sqs';
import { sqsClient } from './sqsClient';

type Message = {
  messageId: string;
  timeStamp: string;
  message: string;
};

export const sendMessageToSQS = async (queueUrl: string, message: Message) => {
  const params = {
    QueueUrl: queueUrl,
    MessageBody: JSON.stringify(message),
  };

  try {
    const data = await sqsClient.send(new SendMessageCommand(params));
    console.log('Message sent successfully:', data.MessageId);
    return data.MessageId;
  } catch (err) {
    console.error('Error sending message:', err);
    throw err;
  }
};
