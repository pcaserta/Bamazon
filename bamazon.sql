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
VALUES ("Xbox one", "electronics", 175, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mortal Kombat", "electronics", 60, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vans shoes", "apparel", 40, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yankees hat", "apparel", 15, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Footon", "furniture", 200, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Love seat", "furniture", 125, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Portable speaker", "electronics", 75, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone charger", "electronics", 12, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Guitar", "music", 500, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snare drum", "music", 299, 4);


