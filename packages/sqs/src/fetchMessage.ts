import { ReceiveMessageCommand } from '@aws-sdk/client-sqs';
import { sqs } from './sqsClient';

export const fetchMessagesToSQS = async (queueUrl: string) => {
  const params = {
    QueueUrl: queueUrl,
    MaxNumberOfMessages: 10,
  };

  try {
    const data = await sqs.send(new ReceiveMessageCommand(params));
    const messages = data.Messages;
    if (messages) {
      return messages;
    } else {
      console.log('No messages received');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
