CREATE TABLE IF NOT EXISTS persona (
    id              int NOT NULL AUTO_INCREMENT,
    nombre          VARCHAR(255),
    nacimiento      VARCHAR(255),
    color_ojos      VARCHAR(255),
    sexo            VARCHAR(6),
    color_cabello   VARCHAR(255),
    altura          INT,
    peso            INT,
    color_piel      VARCHAR(255),
    creado          DATETIME,
    modificado      DATETIME,
    estado          CHAR(1) DEFAULT "A",
    PRIMARY KEY (id)
);

SELECT * FROM persona;

DROP TABLE persona;