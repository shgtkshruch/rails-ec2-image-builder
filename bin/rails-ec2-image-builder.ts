#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RailsEc2ImageBuilderStack } from '../lib/rails-ec2-image-builder-stack';

const app = new cdk.App();
new RailsEc2ImageBuilderStack(app, 'RailsEc2ImageBuilderStack');
