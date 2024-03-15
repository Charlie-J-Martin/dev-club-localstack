import { DeleteMessageCommand } from '@aws-sdk/client-sqs';
import { sqsClient } from './sqsClient';

export const deleteMessageFromSQS = async (
  queueUrl: string,
  receiptHandle: string
) => {
  const params = {
    QueueUrl: queueUrl,
    ReceiptHandle: receiptHandle,
  };

  try {
    const data = await sqsClient.send(new DeleteMessageCommand(params));
    console.log('Message deleted successfully:', data);
    return data;
  } catch (err) {
    console.error('Error deleting message:', err);
    throw err;
  }
};
