![Image Jest Framework](https://i.imgur.com/64HGWfN.png)

<h1 align="center">Aprendendo TDD com Jest</h1>

[![GitHub stars](https://img.shields.io/github/stars/andressaaborges/learning-tdd)](https://github.com/andressaaborges/learning-tdd/stargazers) ![Project development status](https://img.shields.io/static/v1?label=status&message=done&color=green&) [![Open code](https://img.shields.io/static/v1?label=&labelColor=333&logo=visualstudiocode&logoColor=blue&message=Open%20in%20Visual%20Studio%20Code&color=blue)](https://github.dev/andressaaborges/learning-tdd) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=bugs)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd)

<p>
    Este projeto foi criado com o objetivo de estudar e praticar TDD com JavaScript puro usando o framework Jest. E nossa, eu amei muito! Sério! 🤩
</p>

<details>
    <summary>Quer saber o que aprendi?</summary>
    
    1. Tipos de testes automatizados e Continuous Delivery
    2. O que é TDD?
    3. O que é uma unidade?
    4. Vantagens TDD
    5. Ciclo de um TDD
    6. Testes nativos x Testes com libs/frameworks
    7. Documentação Jest (configuração e sintaxe)
    
</details>

<details>
    <summary>Quer saber qual material recomendo para você aprender também?</summary>
    
* [Se gosta de aprender por vídeos, assista as partes 1 e 2, você vai gostar! Os vídeos estão em pt-br :)](https://www.youtube.com/watch?v=hwgy0l7_XRE)
* [Leia a documentação do Jest! Não só porque é o guia da pessoa desenvolvedora, mas também porque ela é linda, acredite!](https://jestjs.io)
   
</details>

<br>
<hr>
<br>

<h3>
    🔎 Ok, mas quais são as funcionalidades deste código?
</h3>
<p>
    O projeto possui um arquivo que é uma calculadora com 4 funções: adicionar, subtrair, dividir e multiplicar. Todas estas funções recebem dois números como parâmetros e retorna o resulta da operação com estes números.
    Veja:
</p>

```javascript
export const sum = (num1, num2) => {
    return num1 + num2;
};
```

<p>
    Para cada função, dois testes foram escritos. Veja:
</p>

```javascript
describe('Tests for sum() function', () => {
    test('adds 1 + 2 to equal 3', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    test('adds 3 + 2 to equal 5', () => {
        const result = sum(3, 2);
        expect(result).toBe(5);
    });
});
```

<br>
<hr>
<br>

<h3>🧩 Estas foram as tecnologias e ferramentas utilizadas neste projeto</h3>

![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=yellow&color=323330) ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![SonarLint](https://img.shields.io/badge/SonarLint-CB2029?style=for-the-badge&logo=sonarlint&logoColor=white) ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-%23333?style=for-the-badge&logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=for-the-badge)](https://gitmoji.dev)

<br>
<hr>
<br>

<h3>💃🏾‍Para rodar o projeto e ver os testes passando</h3>

1. clone o repositório
```shell
git clone https://github.com/andressaaborges/learning-tdd.git
```

2. instale as dependências:
```shell
npm i
```
ou:

```shell
yarn init
```

3. execute os testes:
```shell
npm run test
```

<br>
<hr>
<br>

<h6>
    PR's são bem vindos!
</h6>

> <img src="https://github.com/andressaaborges/portfolio-pretalab/blob/master/assets/logo-andressa-borges.svg" width="24" alt="Logo Andressa Borges"/> Andressa Borges
