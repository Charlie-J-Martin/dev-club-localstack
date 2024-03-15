import { pollQueue } from './processMessage';

const queueUrl = 'http://localhost:4566/000000000000/dev-club-localstack-queue';

const main = async () => {
  pollQueue(queueUrl);
};

main();
