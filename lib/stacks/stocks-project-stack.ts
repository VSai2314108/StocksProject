import {Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class StocksProjectStack extends Stack {
  constructor(scope: Construct, id: string, stageName: string, props?: StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'StocksProjectQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
