export const config = {
  "dev": {
    "username": "postmydb",
    "password": "postmydb",
    "database": "postgres",
    "host": "postmydb.clmhj7gtpwni.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "testbucket-365"
  },
  "jwt": {
    "secret": "helloworld"
  },
  "prod": {
    "username": "postmydb",
    "password": "postmydb",
    "database": "postgres",
    "host": "postmydb.clmhj7gtpwni.us-east-1.rds.amazonaws.com",
    "dialect": "postgres"
  }
}
