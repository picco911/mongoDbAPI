#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
RUN dotnet dev-certs https --clean
RUN dotnet dev-certs https -t
COPY ["cvApi/cvApi.csproj", "cvApi/"]
RUN dotnet restore "cvApi/cvApi.csproj"
COPY . .
WORKDIR "/src/cvApi"
RUN dotnet build "cvApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "cvApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "cvApi.dll"]
