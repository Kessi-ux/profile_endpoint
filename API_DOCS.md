# API Documentation

## Base URL

- **Local Development:** `http://localhost:3000`

- **Production (Railway):** `https://profileendpoint-production.up.railway.app`

---

## Endpoints

### GET `/me`

Returns information about the user.

#### Request

- **Method:** GET
- **URL:** `/me`
- **Headers:** None required

#### Response

- **Status:** 200 OK
- **Content-Type:** application/json

#### Response Body Example

```json
{
  "status": "success",
  "user": {
    "email": "uchenyikesandu@gmail.com",
    "name": "Uchenyi Kesandu",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T03:43:40.220Z",
  "fact": "In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98° F. If these kittens are left in a very warm room, their points won’t darken and they will stay a creamy white."
}