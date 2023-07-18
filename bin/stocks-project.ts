#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StocksProjectPipelineStack } from '../lib/stocks-project-pipeline-stack';

const app = new cdk.App();
new StocksProjectPipelineStack(app, 'StocksProjectStack', {
  env: { account: '123456789012', region: 'us-east-1' },
});