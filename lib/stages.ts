import {Stage, StageProps} from 'aws-cdk-lib';
import { StocksProjectStack } from './stacks/stocks-project-stack';
import { Construct } from 'constructs';

export class PipelineStage extends Stage {
    constructor(scope: Construct, stageName: string, props?: StageProps) {
        super(scope, stageName, props);
        const service = new StocksProjectStack(this, 'StocksProjectStack', stageName, props);
    }
}
