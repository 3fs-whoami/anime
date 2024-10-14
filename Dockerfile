FROM node:22.9.0

WORKDIR /app

COPY . .
COPY .env  .env
RUN npm install 
RUN npm i @phosphor-icons/react
RUN chmod +x inside-container.sh
ENTRYPOINT [ "./inside-container.sh" ]
CMD [ "npm", "run", "dev" ]
EXPOSE 3000
# FROM mysql:5.7

# # Set environment variables
# # RUN apt install nano -y
# # USER root
# ENV MYSQL_ROOT_PASSWORD=root
# ENV MYSQL_DATABASE=anime_list

# # Copy the initialization script
# COPY inside-container.sh /usr/local/bin/
# RUN chmod +x /usr/local/bin/inside-container.sh

# # Run the initialization script
# CMD ["/usr/local/bin/inside-container.sh"]





# FROM node:22.9.0
# WORKDIR /app
# COPY --from=builder /app .