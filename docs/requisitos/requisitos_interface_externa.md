# Requisitos de Interface Externa

Este documento descreve as interfaces externas previstas para o MVP do sistema, ou seja, os pontos de interação entre o sistema e usuários, dispositivos, serviços, banco de dados e rede local.

---

# 1. Requisitos de Interface com o Usuário

## RIU01 - Interface do administrador

O sistema deve disponibilizar uma interface web para uso do administrador, permitindo o gerenciamento do concurso, candidatos, jurados, notas e classificação.

## RIU02 - Interface dos jurados

O sistema deve disponibilizar uma interface web para os jurados registrarem suas avaliações durante a apresentação dos candidatos.

## RIU03 - Interface responsiva

A interface dos jurados deve ser adequada para uso em celulares.

## RIU04 - Interface simples para operação durante o evento

As telas devem apresentar apenas as informações necessárias para a execução das atividades de cada usuário, evitando excesso de opções durante o concurso.

---

# 2. Requisitos de Interface de Hardware

## RIH01 - Notebook principal

O sistema deverá ser executado inicialmente em um notebook ou computador principal utilizado pela organização do evento.

## RIH02 - Dispositivos dos jurados

Os jurados poderão utilizar seus próprios celulares para acessar a interface de avaliação.

## RIH03 - Roteamento local

Caso não exista rede Wi-Fi disponível no local, o notebook principal poderá atuar como ponto de acesso ou roteador local para permitir a conexão dos jurados.

---

# 3. Requisitos de Interface de Comunicação

## RIC01 - Comunicação em rede local

O sistema deverá permitir comunicação entre o notebook principal e os dispositivos dos jurados por meio de rede local.

## RIC02 - Acesso via navegador

Os dispositivos conectados à rede local deverão acessar o sistema por meio de um navegador web.

## RIC03 - Sincronização do candidato atual

Quando o administrador alterar o candidato em apresentação, os dispositivos dos jurados deverão receber a atualização do candidato atual.

## RIC04 - Envio de avaliações

As notas registradas pelos jurados deverão ser enviadas ao servidor local para armazenamento e processamento.

---

# 4. Requisitos de Interface com Sistemas/Software

## RIS01 - Banco de dados MySQL

O sistema deverá se comunicar com um banco de dados MySQL responsável pelo armazenamento das informações do concurso.

## RIS02 - API backend

O front-end deverá se comunicar com uma API responsável por processar autenticação, candidatos, jurados, notas e classificação.

## RIS03 - Arquivos de imagem

O sistema deverá permitir a exibição de imagens de referência associadas aos candidatos.

## RIS04 - Exportação de resultados

O sistema poderá gerar arquivo contendo o resultado final do concurso para consulta posterior pela organização.

---

# 5. Requisitos de Interface com Dados

## RID01 - Dados dos candidatos

O sistema deverá manipular dados de candidatos, incluindo nome, personagem, obra de origem e imagens de referência.

## RID02 - Dados das avaliações

O sistema deverá manipular dados de avaliações, incluindo jurado, candidato, categoria e nota atribuída.

## RID03 - Dados da classificação

O sistema deverá manipular os dados necessários para cálculo e apresentação da classificação final do concurso.
