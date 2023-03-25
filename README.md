# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Routes

| Method | Path | Purpose |
| Post | /places/:id/rant | Create a rant (comment) about a particular place |
| Delete | /places/:id/rant/:id | Delete a rant (comment) about a particular place |
| Get | \* | 404 page (matches any route not defined above) |

## Data Models

### places

| Field    | Type      |
| -------- | --------- |
| id       | Object ID |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |
