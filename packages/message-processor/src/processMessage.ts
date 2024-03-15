import { deleteMessageFromSQS } from '../../sqs/src/deleteMessageFromSQS';
import { fetchMessagesToSQS } from '../../sqs/src/fetchMessagesToSQS';

export const processMessage = async (queueUrl: string) => {
  const messages = await fetchMessagesToSQS(queueUrl);
  if (messages) {
    for (const message of messages) {
      console.log(
        'Processing order... \n',
        'Order:',
        JSON.parse(message.Body!)
      );
      await deleteMessageFromSQS(queueUrl, message.ReceiptHandle!);
    }
  } else {
    console.log('No messages received');
  }
};

export const pollQueue = async (queueUrl: string) => {
  while (true) {
    await processMessage(queueUrl);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};
