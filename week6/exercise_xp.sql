
-- CREATE TABLE  customers(
-- customers_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (50) NOT NULL,
-- last_name VARCHAR (50) NOT NULL );


INSERT INTO customers (first_name,last_name)
VALUES	
('Greg' ,'Jones'),
('Sandra' ,'Jones'),
('Scott' ,'Scott'),
('Trevor' ,'Green'),
('Melanie','Johnson');

	
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- 	SELECT first_name,last_name FROM customers WHERE (last_name)='Smith';
	
-- 	All customers whose last name is ‘Jones’.
-- SELECT first_name,last_name FROM customers WHERE (last_name)='Jones';

-- All customers whose firstname is not ‘Scott’.
-- SELECT first_name,last_name FROM customers WHERE (first_name)!='Scott';