DROP TABLE IF EXISTS Customers;

CREATE TABLE Customers (
    CustomerID INT GENERATED ALWAYS AS IDENTITY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(64) NOT NULL,
    Phone VARCHAR(15) UNIQUE NOT NULL,
    Address VARCHAR(255) NOT NULL,
    PostalCode VARCHAR(8) NOT NULL,
    PRIMARY KEY(CustomerID)
);

-- Insert customer data with hashed passwords
INSERT INTO Customers (FirstName, LastName, Email, Password, Phone, Address, PostalCode)
VALUES (
    'John',
    'Doe',
    'john.doe@example.com',
    'qwerty',
    '07123456789',
    '123 High Street',
    'SW1A 1AA'
);

INSERT INTO Customers (FirstName, LastName, Email, Password, Phone, Address, PostalCode)
VALUES (
    'Jane',
    'Smith',
    'jane.smith@example.com',
    'asdfgh', -- Hash the password using the HashPassword function
    '07987654321',
    '456 Elm Avenue',
    'M1 1AA'
);

INSERT INTO Customers (FirstName, LastName, Email, Password, Phone, Address, PostalCode)
VALUES (
    'Michael', 
    'Johnson', 
    'michael.j@example.com',  
    'zxcvbn', 
    '07753918426', 
    '789 Oak Road', 
    'EH1 1AA'
);
INSERT INTO Customers (FirstName, LastName, Email, Password, Phone, Address, PostalCode)
VALUES (
    'Emily', 
    'Brown', 
    'emily.brown@example.com', 
    'qazwsx', 
    '07147258369', 
    '101 Maple Drive', 
    'BT1 1AA'
);

INSERT INTO Customers (FirstName, LastName, Email, Password, Phone, Address, PostalCode)
VALUES (
    'Robert', 
    'Wilson', 
    'robert.w@example.com', 
    'zaqxsw', 
    '07963852741', 
    '222 Cedar Lane', 
    'CF10 1AA'
);
INSERT INTO Customers (FirstName, LastName, Email, Password, Phone, Address, PostalCode)
VALUES (
    'Sarah', 
    'Lee', 
    'sarah.lee@example.com', 
    'pass', 
    '07321987654', 
    '333 Birch Crescent', 
    'BS1 1AA'
);


