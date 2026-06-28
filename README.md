# COSPLAY-SCORE-SYSTEM

Sistema para gerenciamento e apuração de concursos de cosplay em tempo real.

## Sobre o projeto

Este projeto surgiu da necessidade de substituir o processo manual de avaliação utilizado em concursos de cosplay por uma solução simples, rápida e intuitiva.

O objetivo é permitir que administradores organizem eventos, acompanhem a classificação em tempo real e que jurados realizem suas avaliações através de uma interface dedicada.

O sistema está sendo desenvolvido inicialmente como um **MVP (Minimum Viable Product)** para utilização em eventos presenciais, priorizando simplicidade, rapidez e confiabilidade.

Nesta primeira versão todo o sistema funcionará em rede local.

---

## Objetivos

- Digitalizar o processo de avaliação.
- Reduzir erros de cálculo.
- Atualizar a classificação em tempo real.
- Centralizar todas as notas em um único sistema.
- Facilitar alterações de notas quando autorizadas pelo administrador.
- Gerar automaticamente a classificação final.

---

## Tecnologias

### Banco de Dados

- MySQL

### Front-end _(em desenvolvimento)_

- React

### Back-end _(planejado)_

- Python
- FastAPI

---

## Estrutura do projeto

```text
database/
    Banco de dados, diagrama e scripts SQL.

frontend/
    Interface desenvolvida em React.

backend/
    API responsável pela comunicação entre interface e banco de dados.

docs/
    Documentação do projeto.
```

---

## Situação atual

- ✅ Modelagem do banco de dados
- ✅ Banco implementado em MySQL
- ✅ Protótipos das telas
- ✅ Interface inicial em React
- 🚧 Desenvolvimento do Front-end
- ⏳ Desenvolvimento da API
- ⏳ Comunicação em tempo real
- ⏳ Exportação de resultados

---

## Funcionalidades planejadas

### Administrador

- Criar concursos
- Selecionar candidatos participantes
- Definir ordem das apresentações
- Avançar candidato atual
- Visualizar classificação em tempo real
- Alterar notas quando necessário
- Encerrar concurso
- Exportar resultado final

### Jurado

- Login
- Visualizar candidato atual
- Navegar pelas imagens de referência
- Atribuir notas
- Enviar avaliação

---

## Licença e uso

Este projeto é disponibilizado publicamente para fins de portfólio, estudo e demonstração do desenvolvimento.

Todos os direitos sobre o código-fonte, documentação, marca, identidade visual e demais materiais do projeto são reservados ao autor.

Não é permitido copiar, modificar, distribuir, sublicenciar, vender ou utilizar este projeto, total ou parcialmente, para fins comerciais sem autorização prévia e expressa do autor.

Copyright (c) 2026 Endrew Marra. Todos os direitos reservado

Este projeto está licenciado sob a licença MIT.
