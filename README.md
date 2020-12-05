# Project Name

> AirBnB

## Related Projects

  - https://github.com/spicy-boiz/reservations-service
  - https://github.com/spicy-boiz/photo-carousel-service
  - https://github.com/spicy-boiz/places-to-stay-service
  - https://github.com/spicy-boiz/reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

"npm run server-prod" : runs the express server
"npm run react-dev" : compiles components and watches for changes

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


# CRUD
## Create: Add a listing
- Method
  - POST
- Endpoint
  - /api/listing/:id/places
- Path params
  - id
- Request body
```
  {
    listingId: int,
    listingName: string,
    morePlacesId: [
      {
        listingId: int,
        pictureURL: string,
        locationName: string,
        liked: boolean,
        score: int,
        reviewCount: int,
        roomType: string,
        roomName: string,
        bedCount: int,
        costPerNight: int
      }
    ]
  }
```
- Response object
  - 200 Status Code

## Create: Add a new favorite for a user
- Method
  - POST
- Endpoint
  - /api/listing/:id/user
- Path params
  - id
- Request body
```
  {
    listingId: int
  }
```
- Response object
  - 200 Status Code

## Read: Request for a listings array of more places
- Method
  - GET
- Endpoint
  - /api/listing/:id/places
- Path params
  - id
- Response object
```
  {
    listingId: int,
    listingName: string,
    morePlacesId: [
      {
        listingId: int,
        pictureURL: string,
        locationName: string,
        liked: boolean,
        score: int,
        reviewCount: int,
        roomType: string,
        roomName: string,
        bedCount: int,
        costPerNight: int
      }
    ]
  }
```

## Update: Rearrange the order of the morePlaces array
- Method
  - PUT
- Endpoint
  - /api/listings/:id/places
- Path params
  - id
- Request body
```
  {
    morePlacesId: [
      {
        listingId: int,
        <!-- pictureURL: string,
        locationName: string,
        score: int,
        reviewCount: int,
        roomType: string,
        roomName: string,
        bedCount: int,
        costPerNight: int -->
      }
    ]
  }
```
- Response object
  - 200 Status Code

## Delete: remove a listing
- Method
  - DELETE
- Endpoint
  - /api/:id/places
- Path params
  - id
- Request body
  - {id: int}
- Response object
  - 200 Status Code