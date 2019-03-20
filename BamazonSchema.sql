CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
  id int AUTO_INCREMENT,
  product_name varchar(45) NOT NULL,
  department_name varchar(45) NOT NULL,
  price DECIMAL(20) NOT NULL,
  stock INTEGER(20) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO products(product_name, department_name, price, stock) VALUES ("Charcoal", "Outdoors", 15.00, 40);
INSERT INTO products(product_name, department_name, price, stock) VALUES ("Bud Light", "Alcohol", 1.50, 135);
INSERT INTO products(product_name, department_name, price, stock) VALUES ("Microsoft Surface", "Computers and DI", 900.00, 20);
INSERT INTO products(product_name, department_name, price, stock) VALUES ("Canon Camera", "Computers and DI", 450.00, 12);
INSERT INTO products(product_name, department_name, price, stock) VALUES ("Two Person Tent", "Outdoors", 115.00, 25);
INSERT INTO products(product_name, department_name, price, stock) VALUES ("Waterproof Speaker", "Outdoors", 35.00, 33);
INSERT INTO products(product_name, department_name, price, stock) VALUES ("Jack Daniels", "Alcohol", 35.00, 28);
INSERT INTO products(product_name, department_name, price, stock) VALUES ("Zelda Snapback", "Apparel", 12.00, 73);
INSERT INTO products(product_name, department_name, price, stock) VALUES ("Vans", "Apparel", 40.00, 30);
INSERT INTO products(product_name, department_name, price, stock) VALUES ("Gaming Mouse", "Computers and DI", 49.00, 25);