create database if not exists projetoGerencimento;
use projetoGerencimento;

insert into Produto(descricao, valorUnitario) values('Temaki', 22.9);
insert into Estoque(descricao, quantidade, criado, atualizado) values('Alga', 20, curdate(), curdate());
insert into Estoque(descricao, quantidade, criado, atualizado) values('Arroz', 10, curdate(), curdate());
insert into Estoque(descricao, quantidade, criado, atualizado) values('Peixe', 30, curdate(), curdate());

insert into Produto(descricao, valorUnitario) values('Yakisoba', 32.8);
insert into Estoque(descricao, quantidade, criado, atualizado) values('Macarrão', 20, curdate(), curdate());
insert into Estoque(descricao, quantidade, criado, atualizado) values('Frango', 15, curdate(), curdate());
insert into Estoque(descricao, quantidade, criado, atualizado) values('Carne', 15, curdate(), curdate());
insert into Estoque(descricao, quantidade, criado, atualizado) values('Legumes', 10, curdate(), curdate());

insert into Produto(descricao, valorUnitario) values('Sashimi', 39.9);

insert into Produto(descricao, valorUnitario) values('Coca Cola', 6.5);
insert into Estoque(descricao, quantidade, criado, atualizado) values('Coca Cola', 50, curdate(), curdate());

insert into Produto(descricao, valorUnitario) values('Água', 5.0);
insert into Estoque(descricao, quantidade, criado, atualizado) values('Água', 45, curdate(), curdate());

insert into Produto(descricao, valorUnitario) values('Wasabi', 1.5);
insert into Estoque(descricao, quantidade, criado, atualizado) values('Wasabi', 20, curdate(), curdate());

insert into Produto(descricao, valorUnitario) values('Cream Cheese', 3.0);
insert into Estoque(descricao, quantidade, criado, atualizado) values('Cream Cheese', 15, curdate(), curdate());

insert into Produto(descricao, valorUnitario) values('Shoyu', 2.0);
insert into Estoque(descricao, quantidade, criado, atualizado) values('Shoyu', 30, curdate(), curdate());

insert into Mesa(numero, status) values(1, 0);
insert into Mesa(numero, status) values(2, 0);
insert into Mesa(numero, status) values(3, 0);
insert into Mesa(numero, status) values(4, 0);
insert into Mesa(numero, status) values(5, 0);
insert into Mesa(numero, status) values(6, 0);
insert into Mesa(numero, status) values(7, 0);
insert into Mesa(numero, status) values(8, 0);