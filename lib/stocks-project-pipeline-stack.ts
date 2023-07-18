import { Stack, StackProps } from "aws-cdk-lib";
import { CodePipeline, CodePipelineSource, ManualApprovalStep, ShellStep } from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { PipelineStage } from "./stages";

export class StocksProjectPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
        
        const pipeline = new CodePipeline(this, 'StocksProjectPipeline', {
            pipelineName: 'StocksProjectPipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('VSai2314108/StocksProject', 'main'),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            }),
        });

        const betaStage = pipeline.addStage(new PipelineStage(this, 'beta', {
            env: { account: '695551143108', region: 'us-east-1' }
        }));

        betaStage.addPost(new ManualApprovalStep('ApproveBeta'));

        const prodStage = pipeline.addStage(new PipelineStage(this, 'prod', {
            env: { account: '695551143108', region: 'us-east-1' }
        }));

    }
}