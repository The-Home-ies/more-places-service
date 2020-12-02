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
## /POST
- Endpoint
  - /listing/:id/places/add
- Path params
  - id
- Request body
```json
  {
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

### /GET
- Endpoint
  - /listing/:id/places
- Path params
  - id
- Request body
  - {id: int}
- Response object
```json
  {
    listingId: int
    listingName: string
    morePlacesId: [
      {
        listingId: int
        pictureURL: string
        locationName: string
        liked: boolean
        score: int
        reviewCount: int
        roomType: string
        roomName: string
        bedCount: int
        costPerNigjt: int
      }
    ]
  }
```

## /PUT
- Endpoint
  - /listing/:id/places/update
- Path params
  - id, placesId
- Request body
```json
  {
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

## /DELETE
- Endpoint
  - /listing/:id/places/delete
- Path params
  - id
- Request body
  - {listing_id: int}
- Response object
  - 200 Status Code