DROP TABLE IF EXISTS Customers;

CREATE TABLE Customers (
    CustomerID INT GENERATED ALWAYS AS IDENTITY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Phone VARCHAR(15) UNIQUE NOT NULL,
    Address VARCHAR(255) NOT NULL,
    PostalCode VARCHAR(8) NOT NULL,
    PRIMARY KEY(CustomerID)
);
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('John', 'Doe', 'john.doe@example.com', '07123456789', '123 High Street', 'SW1A 1AA');
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('Jane', 'Smith', 'jane.smith@example.com', '07987654321', '456 Elm Avenue', 'M1 1AA');
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('Michael', 'Johnson', 'michael.j@example.com', '07753918426', '789 Oak Road', 'EH1 1AA');
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('Emily', 'Brown', 'emily.brown@example.com', '07147258369', '101 Maple Drive', 'BT1 1AA');
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('Robert', 'Wilson', 'robert.w@example.com', '07963852741', '222 Cedar Lane', 'CF10 1AA');
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('Sarah', 'Lee', 'sarah.lee@example.com', '07321987654', '333 Birch Crescent', 'BS1 1AA');
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('William', 'Anderson', 'william.a@example.com', '07369258147', '444 Willow Park', 'G1 1AA');
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('Olivia', 'Martin', 'olivia.m@example.com', '07852741369', '555 Redwood Close', 'LS1 1AA');
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('David', 'Garcia', 'david.g@example.com', '07748519263', '666 Sequoia Court', 'AB1 1AA');
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, PostalCode)
VALUES ('Sophia', 'Clark', 'sophia.c@example.com', '07326159487', '777 Spruce Terrace', 'DN1 1AA');

