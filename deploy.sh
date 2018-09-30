#!/bin/bash

aws s3 cp ./dist/Angular6Upload s3://saed-files.com --recursive --acl public-read