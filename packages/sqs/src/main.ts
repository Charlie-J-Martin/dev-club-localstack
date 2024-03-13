import { createQueue } from './createQueue';

const main = async () => {
  await createQueue('dev-club-localstack-queue');
};

main();
