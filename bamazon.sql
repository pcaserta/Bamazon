DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("xbox one", "electronics", 175, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mortal kombat", "electronics", 60, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vans shoes", "apparel", 40, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yankees hat", "apparel", 15, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("footon", "furniture", 200, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("love seat", "furniture", 125, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("portable speaker", "electronics", 75, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone charger", "electronics", 12, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("guitar", "music", 500, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("snare drum", "music", 299, 4);


