FROM amazonlinux:2.0.20201218.1

WORKDIR /tmp/imagebuilder
RUN curl https://awstoe-us-east-1.s3.us-east-1.amazonaws.com/latest/linux/amd64/awstoe --output awstoe && chmod +x awstoe
