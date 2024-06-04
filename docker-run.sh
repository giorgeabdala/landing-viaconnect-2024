git pull
docker build -t landing-viaconnect-2024 .
docker stop landing-viaconnect-2024
docker rm landing-viaconnect-2024
docker run -d -p 3000:3000 --name landing-viaconnect-2024 --network nginx-proxy-manager_nginx-proxy landing-viaconnect-2024
