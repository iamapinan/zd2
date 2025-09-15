
https://zdbackend.theengage.co/admin/login

docker run -d --name zd-dashboard \
            --env-file .env \
            -p 5002:5002 \
            zd-dashboard