var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('BD_SCA.db');

db.serialize(function() {


//QUESTÃO 02
 db.run("CREATE TABLE IF NOT EXISTS TB_ALUNO (id INTEGER PRIMARY KEY, nome TEXT)");

 db.run("CREATE TABLE IF NOT EXISTS TB_PROFESSOR (id INTEGER PRIMARY KEY, nome TEXT)");

 db.run("CREATE TABLE IF NOT EXISTS TB_DISCIPLINA (id INTEGER PRIMARY KEY, nome TEXT)");

db.run("CREATE TABLE IF NOT EXISTS TB_MATRICULA(id INTEGER PRIMARY KEY, aluno_id INTEGER REFERENCES TB_ALUNO(id), disciplina_id INTEGER REFERENCES TB_DISCIPLINA(id), professor_id INTEGER REFERENCES TB_PROFESSOR(id))");

db.run("CREATE TABLE IF NOT EXISTS TB_PROFESSOR_DISCIPLINA(id INTEGER PRIMARY KEY, disciplina_id INTEGER REFERENCES TB_DISCIPLINA (id), professor_id INTEGER REFERENCES TB_PROFESSOR (id))");


//QUESTÃO 03
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('Ana Beatriz')");
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('Iara Matos')");
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('Layana Carolina')");
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('Nadja Maria')");
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('Yorrana Souza')");

db.run("INSERT INTO TB_PROFESSOR (nome) VALUES ('Antonio WendeLl')");
db.run("INSERT INTO TB_PROFESSOR (nome) VALUES ('Joselito Parente')");
db.run("INSERT INTO TB_PROFESSOR (nome) VALUES ('Samara Moura')");
db.run("INSERT INTO TB_PROFESSOR (nome) VALUES ('Jean Custodio')");
db.run("INSERT INTO TB_PROFESSOR (nome) VALUES ('Serra Bezerra')");

db.run("INSERT INTO TB_DISCIPLINA (nome) VALUES ('Redes de Computadores')");
db.run("INSERT INTO TB_DISCIPLINA (nome) VALUES ('Física Eletricidade')");
db.run("INSERT INTO TB_DISCIPLINA (nome) VALUES ('Educação Física')");
db.run("INSERT INTO TB_DISCIPLINA (nome) VALUES ('Língua Portuguesa')");
db.run("INSERT INTO TB_DISCIPLINA (nome) VALUES ('MFES')");
  });

db.each("SELECT id, nome FROM TB_ALUNO", function(err, row) {
    console.log(row.id + ": " + row.nome);
  });

db.each("SELECT id, nome FROM TB_PROFESSOR", function(err, row) {
    console.log(row.id + ": " + row.nome);
  });

db.each("SELECT id, nome FROM TB_DISCIPLINA", function(err, row) {
    console.log(row.id + ": " + row.nome);
  });
db.close();