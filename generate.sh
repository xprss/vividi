rm -rf ./frontend/src/shared;
openapi-generator generate \
  -i http://localhost:8000/api-json \
  -g typescript-angular \
  -o ./frontend/src/shared \
  --additional-properties=modelPropertyNaming=original,supportsES6=true,withInterfaces=true;