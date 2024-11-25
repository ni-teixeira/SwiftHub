create database swifthub;
use swifthub;

create table album(
	idAlbum int primary key auto_increment,
    nome varchar(45) not null,
    dtLancamento date not null,
    qtdMusicas int not null
);

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(100) not null,
    senha varchar(30) not null,
    dtNasc date not null,
    fkAlbum int not null,
    constraint fkAlbumUser foreign key (fkAlbum) references album(idAlbum)
);

create table jogo(
	idJogo int primary key auto_increment,
    pontuacao int,
    acertos int,
    erros int,
    fkUsuario int,
    constraint fkJogoUser foreign key (fkUsuario) references usuario(idUsuario)
);

INSERT INTO album (nome, dtLancamento, qtdMusicas) VALUES 
('Taylor Swift', '2006-10-24', 11),
('Fearless', '2008-11-11', 13),
('Speak Now', '2010-10-25', 14),
('Red', '2012-10-22', 16),
('1989', '2014-10-27', 13),
('Reputation', '2017-11-10', 15),
('Lover', '2019-08-23', 18),
('Folklore', '2020-07-24', 16),
('Evermore', '2020-12-11', 15),
('Midnights', '2022-10-10', 13),
('TTPD', '2024-04-19', 31);

select * from usuario;
select * from jogo;
select * from album;