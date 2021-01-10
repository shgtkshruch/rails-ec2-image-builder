import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as RailsEc2ImageBuilder from '../lib/rails-ec2-image-builder-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new RailsEc2ImageBuilder.RailsEc2ImageBuilderStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
