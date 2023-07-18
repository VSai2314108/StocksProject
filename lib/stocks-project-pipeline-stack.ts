import { Stack, StackProps } from "aws-cdk-lib";
import { CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";

export class StocksProjectPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
        
        new CodePipeline(this, 'StocksProjectPipeline', {
            pipelineName: 'StocksProjectPipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('VSai2314108/StocksProject', 'main'),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            }),
        });
    }
}