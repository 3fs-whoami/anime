#!/bin/bash
npm i prisma --save-dev
npm install @prisma/client
# RUN npx prisma init --datasource-provider mysql
npx prisma migrate dev 
npx prisma migrate status
npx prisma generate
# npm run buildprisma 

# # Wait for MySQL to be available
# until mysql -uroot -proot -e "SELECT 1;" >/dev/null 2>&1; do
#   echo "Waiting for MySQL to be ready..."
#   sleep 5
# done

# echo "MySQL is up and running."

# # You can add additional initialization commands here if needed
# # Example: Create additional tables or seed data
# # mysql -uroot -proot -e "USE anime_list; CREATE TABLE ...;"

# echo "Database 'anime_list' is ready."

