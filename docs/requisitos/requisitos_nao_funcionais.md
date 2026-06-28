
# Requisitos Não Funcionais

Este documento descreve características de qualidade, restrições técnicas e condições de operação previstas para o MVP.

---

## RNF01 - Interface responsiva

O sistema deve possuir interface adaptável para uso em celulares, tablets e notebooks.

---

## RNF02 - Uso em rede local

O sistema deve funcionar em ambiente local, sem depender de hospedagem externa ou internet durante o evento.

---

## RNF03 - Baixa complexidade operacional

O sistema deve ser simples de operar durante o evento, reduzindo a necessidade de treinamento dos jurados.

---

## RNF04 - Tempo de resposta adequado

As telas devem responder rapidamente às ações dos usuários, especialmente durante o registro de notas e troca de candidatos.

---

## RNF05 - Persistência dos dados

As informações de candidatos, jurados, notas e classificações devem permanecer armazenadas mesmo após fechar a aplicação.

---

## RNF06 - Segurança básica de acesso

O sistema deve restringir o acesso às telas de administrador e jurado por meio de credenciais previamente cadastradas.

---

## RNF07 - Separação de permissões

Jurados não devem acessar funcionalidades administrativas.

Administradores não devem utilizar a interface de avaliação dos jurados como meio principal de julgamento.

---

## RNF08 - Integridade das avaliações

O sistema deve evitar registros duplicados de avaliação do mesmo jurado para o mesmo candidato.

---

## RNF09 - Usabilidade para jurados

A tela do jurado deve ser objetiva, contendo apenas as informações necessárias para avaliação do candidato atual.

---

## RNF10 - Usabilidade para administrador

A tela do administrador deve permitir acompanhar o andamento do concurso, os candidatos, as médias e a classificação de forma clara.

---

## RNF11 - Compatibilidade com navegadores modernos

O sistema deve funcionar em navegadores modernos, como Google Chrome, Microsoft Edge e navegadores móveis baseados em Chromium.

---

## RNF12 - Organização do código

O projeto deve manter separação clara entre front-end, back-end, banco de dados e documentação.

---

## RNF13 - Facilidade de manutenção

O código deve ser organizado de forma a permitir futuras expansões, como versão online, autoinscrição e histórico de eventos.

---

## RNF14 - Banco de dados relacional

O sistema utilizará MySQL como banco de dados relacional no MVP.

---

## RNF15 - Execução em ambiente controlado

O MVP será utilizado em ambiente presencial e controlado, com usuários previamente definidos.
