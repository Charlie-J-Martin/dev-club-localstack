import { createSQSQueue } from './createSQSQueue';

const main = async () => {
  await createSQSQueue('dev-club-localstack-queue');
};

main();
