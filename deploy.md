# Deployment

Continuous integration and deployment are provided through [Travis CI](https://travis-ci.org/). This happens automatically through the [.travis.yml](.travis.yml) file. 

This has anonymised Amazon Web Services credentials -- do not change these.

Travis currently runs tests, compiles down to optimised JS, and sends these to a public S3 bucket. The deployed site can then be accessed at [placeholder](placeholder).

Only master is built and deployed. It will not deploy if it does not build, so check `npm run build` locally and fix any errors before merging to master.