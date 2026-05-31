# Sistema de Avaliação para Concursos de Cosplay

## Sobre o Projeto

O Sistema de Avaliação para Concursos de Cosplay é uma aplicação em desenvolvimento que tem como objetivo digitalizar e automatizar o processo de avaliação utilizado em concursos de cosplay realizados em eventos geek.

O projeto surgiu a partir da necessidade de substituir processos manuais baseados em fichas impressas, anotações físicas e planilhas eletrônicas, proporcionando maior agilidade, organização e confiabilidade durante a apuração dos resultados.

Inicialmente o sistema está sendo desenvolvido para atender eventos da região de Presidente Prudente e Martinópolis, mas sua estrutura foi planejada para permitir adaptação a diferentes tipos de concursos.

---

## Problema Atual

Atualmente o processo de avaliação apresenta algumas limitações:

- Utilização de fichas impressas para avaliação;
- Necessidade de impressão das referências dos candidatos;
- Risco de perda ou extravio das fichas;
- Dificuldade de leitura de anotações manuais;
- Processo manual de lançamento das notas em planilhas;
- Possibilidade de erros humanos durante cálculos e classificações;
- Maior tempo para divulgação dos resultados;
- Dependência de trabalho operacional durante o evento.

---

## Solução Proposta

O sistema pretende centralizar todo o processo de avaliação em uma única plataforma.

Os jurados poderão acessar o sistema através de seus próprios dispositivos móveis e registrar as notas digitalmente durante as apresentações.

A plataforma será responsável por:

- Gerenciar eventos;
- Gerenciar jurados;
- Gerenciar candidatos;
- Armazenar referências dos personagens;
- Registrar avaliações;
- Calcular médias automaticamente;
- Gerar classificações automaticamente;
- Disponibilizar os resultados para os organizadores.

A primeira versão foi planejada para funcionar inteiramente em rede local, sem necessidade de acesso à internet.

---

## Planejamento do Projeto

### Fase 1 — Modelagem

- [x] Levantamento inicial de requisitos
- [x] Definição das regras de negócio
- [x] Modelagem do banco de dados
- [x] Diagrama Entidade-Relacionamento (ER)
- [x] Estrutura SQL inicial

### Fase 2 — Backend

- [ ] Configuração do ambiente
- [ ] Implementação da autenticação
- [ ] CRUD de usuários
- [ ] CRUD de eventos
- [ ] CRUD de candidatos
- [ ] CRUD de jurados
- [ ] Sistema de avaliações
- [ ] Sistema de classificação

### Fase 3 — Interface

- [ ] Tela de login
- [ ] Painel administrativo
- [ ] Tela de avaliação dos jurados
- [ ] Visualização de candidatos
- [ ] Exibição de resultados

### Fase 4 — Melhorias Futuras

- [ ] Inscrição online de candidatos
- [ ] Cadastro online de jurados
- [ ] Histórico de eventos
- [ ] Consulta pública de resultados
- [ ] Hospedagem online

---

## Situação Atual

Atualmente apenas a modelagem do banco de dados foi concluída.

O repositório contém:

- Estrutura SQL inicial;
- Diagrama do banco de dados;
- Documentação inicial do projeto.

As próximas etapas serão a implementação da API e da camada de autenticação.

---

## Tecnologias

### Banco de Dados

- MySQL

---

## Estrutura Inicial do Banco

O banco foi modelado para representar:

- Usuários;
- Eventos;
- Administradores;
- Jurados;
- Candidatos;
- Avaliações.

Principais relacionamentos:

- Um evento possui vários candidatos;
- Um evento possui vários jurados;
- Um evento possui vários administradores;
- Um candidato pertence a um evento;
- Um jurado pode avaliar vários candidatos;
- Cada avaliação armazena as notas das categorias definidas.

O Diagrama Entidade-Relacionamento (ER) pode ser encontrado neste repositório.

---

## Possíveis Funcionalidades Futuras

- Sistema de inscrições online;
- Cadastro de jurados por convite;
- Gestão de múltiplos eventos simultaneamente;
- Histórico completo de participações;
- Exportação de resultados;
- Dashboard administrativo;
- Hospedagem em nuvem;
- Consulta pública de resultados.

---

## Autor

**Endrew Marra**

Projeto em desenvolvimento voltado para a digitalização e modernização do processo de avaliação em concursos de cosplay.
