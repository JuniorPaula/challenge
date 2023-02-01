## A) Crie uma query que retorne todos os usuários criados no mês de janeiro de 2013, nos grupos (IDs) 15 e 40.

``` sql
select * from users where created = 'datetime';
select * from groups where groups.users_id = (15, 40);

```

## B) Crie uma query para autenticação do usuário (função hash SHA1).

``` sql
SELECT HASHBYTES('SHA1', 'senha')

```
## C) Insira um usuário qualquer e defina que ele pertence aos grupos (IDs) 20 e 33.


``` sql

START TRANSACTION;
  INSERT INTO users(login, password, name)
  VALUES('jane doe', '123', 'jane');
  SELECT LAST_INSERT_ID() INTO @id_user;
  INSERT INTO groups(users_id)
  VALUES(@id_users) WHERE groups.id = (20, 33);
COMMIT;

```

## Crie uma query que retorne todos os usuários que possuem as permissões (IDs) 55, 80 e 48.

``` sql

select * from permissions p where p.group_id = (55,80, 48) 

```

## E) Delete todos os dados de todas as tabelas.

``` sql

drop table users
drop table groups
drop table permissions

```
