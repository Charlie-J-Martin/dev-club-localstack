import { ReceiveMessageCommand } from '@aws-sdk/client-sqs';
import { sqsClient } from './sqsClient';

export const fetchMessagesToSQS = async (queueUrl: string) => {
  const params = {
    QueueUrl: queueUrl,
    MaxNumberOfMessages: 10,
  };

  try {
    const data = await sqsClient.send(new ReceiveMessageCommand(params));
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
