#!/bin/bash
commit_time=`date +%Y-%m-%d-%H:%M`
commit_content=`openssl rand -base64 32`
git add .
git commit -am "$commit_content ## $commit_time"
git push -u origin master
