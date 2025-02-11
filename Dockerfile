# **********
# base stage
# **********
FROM node:lts-alpine AS base
WORKDIR /app

# **********
# deps stage
# **********
FROM base AS deps
# Copy package.json to /app
COPY package.json ./
# Copy available lock file
COPY package.json package-lock.json* ./
# Install dependencies
RUN npm install
# Disable the telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# ***********
# inter stage
# ***********
FROM deps AS inter
# Copy all other files excluding the ones in .dockerignore
COPY . .
# exposing the port
EXPOSE 3000

# **********
# dev stage
# **********
FROM inter AS dev
CMD ["npm", "run", "dev"]

# **********
# storybook stage
# **********
FROM inter AS storybook
ENV STORYBOOK_NO_MANAGER_CACHE=true
EXPOSE 6006
CMD ["npm", "run", "storybook"]
