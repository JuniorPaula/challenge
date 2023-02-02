## Indique a linha de comando (shell) para listar somente os processos node
## rodando no server.

- Para listar os processos node rodando pode-se utilizar o comando
~~~sh
 top
~~~

- esse comando vai listar todos os processo rodando.

- pode-se use também o comando para listar o processo nodejs rodando no server
~~~sh
 ps aux | grep index.js
~~~

-- se estiver com o **PID** do processo, pode listar com
~~~sh
 ps 1234
~~~

