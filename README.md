# dev-club-localstack

This project is a collection of packages that work together to generate and process messages using AWS SQS and Localstack.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker
- Node.js
- npm or Yarn

### Installation

1. Clone the repository:
```git clone <repository-url>```

2. Navigate to the project directory:
`cd dev-club-localstack`

3. Install the dependencies:
`yarn`

### Running the Localstack Docker Image

Navigate to the localstack-config directory and start the Docker image:
`cd packages/localstack-config`
`docker-compose up`

### Creating a Queue
Navigate to the sqsClient directory and run the createSQSQueue.ts script:
`cd ../sqsClient/src`
`yarn run start`

### Starting the Message Generator
Navigate to the message-generator directory and start the application:
`cd ../../message-generator/src`
`yarn run start`

### Starting the Message Processor
In a separate termianl, navigate to the message-processor directory and start the application:
`cd ../../message-processor/src`
`yarn run start`
