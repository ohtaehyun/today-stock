CREATE TABLE fear_greed 
(
  fear_greed_id serial4 PRIMARY KEY,
  fear_greed_timestamp timestamptz NOT NULL,
  rating int NOT NULL,
  score int NOT NULL,
  created_at timestamptz NOT NULL DEFAULT NOW(),
)