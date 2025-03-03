CREATE TABLE fear_greed 
(
  fear_greed_id serial4 PRIMARY KEY,
  fear_greed_timestamp timestamptz NOT NULL UNIQUE,
  rating int NOT NULL,
  score int NOT NULL,
  created_at timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE ticker
(
  ticker_id serial4 PRIMARY KEY,
  ticker varchar NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE stock_history
(
  ticker_id int4 NOT NULL,
  trade_date timestamptz NOT NULL,
  candle_type int NOT NULL,
  open_price numeric NOT NULL,
  high_price numeric NOT NULL,
  low_price numeric NOT NULL,
  close_price numeric NOT NULL,
  volume int8 NOT NULL,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  constraint stock_history_pk PRIMARY KEY(ticker_id, trade_date, candle_type)
);