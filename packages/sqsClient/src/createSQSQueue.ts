import { CreateQueueCommand } from '@aws-sdk/client-sqs';
import { sqsClient } from './sqsClient';

export const createSQSQueue = async (queueName: string) => {
  const params = {
    QueueName: queueName,
  };

  try {
    const data = await sqsClient.send(new CreateQueueCommand(params));
    console.log('Success', data.QueueUrl);
    return data.QueueUrl;
  } catch (err) {
    console.log('Error', err);
    throw err;
  }
};
