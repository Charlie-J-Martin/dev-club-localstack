# Dev Club talks - LocalStack

Within my current team at Elsevier, we host a weekly Dev Club that meets every Friday morning. We start with a quick talk from someone in the team on a topic related to our work or something new that someone has discovered. Then, we discuss coding best practices. Finally, we review solutions for a Code Kata that was picked the previous week.

## Getting Started

This project is a collection of packages that work together to generate and process messages using AWS SQS and Localstack.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker
- Node.js
- npm or Yarn

### Installation

1. Clone the repository:
   
```   
git clone <repository-url>
```
3. Navigate to the project directory:
   
```
cd dev-club-localstack
```

5. Install the dependencies:
   
```
yarn
```

### Running the Localstack Docker Image

Navigate to the localstack-config directory and start the Docker image:

```
cd packages/localstack-config
docker-compose up
```

### Creating a Queue
Navigate to the sqsClient directory and run the createSQSQueue.ts script:

```
cd ../sqsClient/src
yarn run start
```
### Starting the Message Generator
Navigate to the message-generator directory and start the application:

```
cd ../../message-generator/src
yarn run start
```
### Starting the Message Processor
In a separate termianl, navigate to the message-processor directory and start the application:

```
cd ../../message-processor/src
yarn run start
```
