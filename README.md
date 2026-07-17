# Backend Redis Caching

A Producution syle redis caching demo built with Node.js, Express, Docker and Redis.

##Status
In Progress 

                Client
                   │
                   ▼
             Express API
                   │
                   ▼
         Check Redis Cache
          │              │
     Cache Hit      Cache Miss
          │              │
          ▼              ▼
     Return Data     MongoDB
                          │
                          ▼
                  Store in Redis
                          │
                          ▼
                    Return Data