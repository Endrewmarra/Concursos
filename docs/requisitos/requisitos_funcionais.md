
# Requisitos Funcionais

Este documento descreve as funcionalidades previstas para o MVP do sistema de avaliação de concursos de cosplay.

---

## RF01 - Login de usuários

O sistema deve permitir que administradores e jurados acessem suas respectivas interfaces por meio de nome de usuário e senha previamente cadastrados.

---

## RF02 - Redirecionamento por tipo de acesso

Após o login, o sistema deve direcionar o usuário para a tela correspondente ao seu tipo de acesso.

- Administrador: painel administrativo
- Jurado: tela de avaliação

---

## RF03 - Cadastro de candidatos

O sistema deve permitir que o administrador cadastre candidatos informando:

- Nome do participante
- Nome do personagem
- Obra de origem
- Imagens de referência
- Música ou link de apresentação, quando houver

---

## RF04 - Listagem de candidatos cadastrados

O sistema deve permitir que o administrador visualize todos os candidatos cadastrados na base de candidatos.

---

## RF05 - Seleção de candidatos participantes

O sistema deve permitir que o administrador selecione quais candidatos cadastrados participarão da modalidade atual do concurso.

---

## RF06 - Ordenação dos candidatos

O sistema deve permitir que o administrador defina ou altere a ordem de apresentação dos candidatos selecionados.

---

## RF07 - Início do concurso

O sistema deve permitir que o administrador inicie a modalidade do concurso após selecionar e ordenar os candidatos participantes.

---

## RF08 - Controle do candidato atual

O sistema deve permitir que o administrador controle qual candidato está atualmente em apresentação.

---

## RF09 - Avanço para o próximo candidato

O sistema deve permitir que o administrador avance para o próximo candidato da ordem de apresentação.

---

## RF10 - Visualização do candidato pelo jurado

O sistema deve permitir que o jurado visualize o candidato atual em apresentação.

---

## RF11 - Visualização de imagens de referência

O sistema deve permitir que o jurado visualize uma ou mais imagens de referência do candidato atual.

---

## RF12 - Registro de notas

O sistema deve permitir que o jurado registre notas para as categorias avaliativas definidas para o concurso.

---

## RF13 - Envio de avaliação

O sistema deve permitir que o jurado envie sua avaliação do candidato atual.

---

## RF14 - Bloqueio de avaliação duplicada

O sistema deve impedir que o mesmo jurado envie mais de uma avaliação para o mesmo candidato.

---

## RF15 - Cálculo da média do candidato

O sistema deve calcular a média do candidato com base nas notas recebidas dos jurados.

---

## RF16 - Atualização da classificação

O sistema deve atualizar a classificação dos candidatos conforme as avaliações forem registradas.

---

## RF17 - Visualização da classificação pelo administrador

O sistema deve permitir que o administrador visualize a classificação geral da modalidade em andamento.

---

## RF18 - Visualização das notas de um candidato

O sistema deve permitir que o administrador visualize as notas individuais de um candidato, separadas por jurado e categoria.

---

## RF19 - Alteração de notas pelo administrador

O sistema deve permitir que o administrador altere uma nota registrada, caso a correção seja necessária.

---

## RF20 - Encerramento do concurso

O sistema deve permitir que o administrador encerre a modalidade do concurso.

---

## RF21 - Consolidação do resultado final

Ao encerrar o concurso, o sistema deve consolidar a classificação final da modalidade.

---

## RF22 - Exportação do resultado

O sistema deve permitir a exportação ou geração do resultado final da modalidade.

---

## RF23 - Limpeza da seleção atual

Após o encerramento de uma modalidade, o sistema deve permitir limpar a seleção atual de candidatos para iniciar uma nova modalidade.

---

## RF24 - Funcionamento local

O sistema deve permitir seu uso em rede local, com o administrador e os jurados conectados à mesma rede.
