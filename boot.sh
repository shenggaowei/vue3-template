docker build -t template-image .

docker run -dit --name templateImage \
-p 3002:3002 \
template-image
