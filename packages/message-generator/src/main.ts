import { sendMessageToSQS } from '../../sqs/src/sendMessageToSQS';
import { generateMessage } from './generateMessage';

const queueUrl = 'http://localhost:4566/000000000000/dev-club-localstack-queue';

const main = async () => {
  for (let i = 0; i < 100; i++) {
    const message = generateMessage();
    sendMessageToSQS(queueUrl, message);
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
  }
};

main();
