FROM 172.18.0.51:5000/node  
WORKDIR /src
COPY . .
EXPOSE 9999
CMD ["node","index.js"]