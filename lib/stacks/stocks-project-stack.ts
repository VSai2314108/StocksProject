import {Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Table, AttributeType, BillingMode} from 'aws-cdk-lib/aws-dynamodb';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class StocksProjectStack extends Stack {
  constructor(scope: Construct, id: string, stageName: string, props?: StackProps) {
    super(scope, id, props);
  }

  ticker_table = new Table(this, 'TickerTable', {
    partitionKey: { name: 'ticker', type: AttributeType.STRING },
    billingMode: BillingMode.PAY_PER_REQUEST,
  });

  bars_table = new Table(this, 'BarsTable', {
    partitionKey: { name: 'ticker', type: AttributeType.STRING },
    sortKey: { name: 'compositeperiod', type: AttributeType.STRING },
    billingMode: BillingMode.PAY_PER_REQUEST,
  });
}
