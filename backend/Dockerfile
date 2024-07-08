# Use Amazon Corretto 17 as a parent image for the build stage
FROM gradle:jdk22 AS build

# Set the working directory in the container
WORKDIR /app

# Copy Gradle wrapper and build files
COPY gradlew .
COPY gradle ./gradle
COPY build.gradle .
COPY settings.gradle .

# Copy the source code
COPY src ./src

# Give executable permissions to gradlew
RUN chmod +x ./gradlew

# Build the Spring Boot application
RUN ./gradlew build --no-daemon

# Use Amazon Corretto 17 as a parent image for the run stage
FROM gradle:jdk22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built jar file from the build stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
