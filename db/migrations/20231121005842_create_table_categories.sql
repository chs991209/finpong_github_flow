-- migrate:up
CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    flow_type_id INT NOT NULL,
    FOREIGN KEY (flow_type_id) REFERENCES flow_type (id)
);

-- migrate:down
DROP TABLE categories;
