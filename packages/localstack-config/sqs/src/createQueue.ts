import { CreateQueueCommand } from '@aws-sdk/client-sqs';
import { sqs } from './sqsClient';

export const createQueue = async (queueName: string) => {
  const params = {
    QueueName: queueName,
  };

  try {
    const data = await sqs.send(new CreateQueueCommand(params));
    console.log('Success', data.QueueUrl);
    return data.QueueUrl;
  } catch (err) {
    console.log('Error', err);
    throw err;
  }
};
