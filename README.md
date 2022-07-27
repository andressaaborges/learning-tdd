![Image Jest Framework](https://i.imgur.com/64HGWfN.png)

<h1 align="center">Learning TDD with Jest</h1>

[![GitHub stars](https://img.shields.io/github/stars/andressaaborges/learning-tdd)](https://github.com/andressaaborges/learning-tdd/stargazers) ![Project development status](https://img.shields.io/static/v1?label=status&message=done&color=green&) [![Open code](https://img.shields.io/static/v1?label=&labelColor=333&logo=visualstudiocode&logoColor=blue&message=Open%20in%20Visual%20Studio%20Code&color=blue)](https://github.dev/andressaaborges/learning-tdd) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=bugs)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=andressaaborges_learning-tdd&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=andressaaborges_learning-tdd)

<p>
    This project was created with the objective of studying and practicing TDD with pure JavaScript using the Jest framework. And wow, I loved it! 🤩
</p>

<details>
    <summary>Want to know what I learned?</summary>
    
    1. Types of automated tests and Continuous Delivery
    2. What is TDD?
    3. What is a unit?
    4. TDD advantages
    5. Cycle of a TDD
    6. Native tests x Tests with libs/frameworks
    7. Jest Documentationg
    
</details>

<details>
    <summary>Want to know the material I recommend for you to learn?</summary>
    
* [If you usually learn by videos, watch part 1 and 2, you will like it! Os vídeos são em pt-br :)](https://www.youtube.com/watch?v=hwgy0l7_XRE)
* [Read the Jest documentation! Not only because it's the dev person's guide, but also because she's really beautiful, really!](https://jestjs.io)
   
</details>

<br>
<hr>
<br>

<h3>
    🔎 Okay, but what are the features of the code?
</h3>
<p>
    The project has a single file that is a calculator with 4 functions: add, subtract, divide and multiply. All functions take 2 numbers as a parameter and return the result of the operation with these 2 numbers.
    See:
</p>

```javascript
export const sum = (num1, num2) => {
    return num1 + num2;
};
```

<p>
    For each function, two tests were written. Look:
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

<h3>🧩 These were the technologies and tools used in this project</h3>

![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=yellow&color=323330) ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![SonarLint](https://img.shields.io/badge/SonarLint-CB2029?style=for-the-badge&logo=sonarlint&logoColor=white) ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-%23333?style=for-the-badge&logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=for-the-badge)](https://gitmoji.dev)

<br>
<hr>
<br>

<h3>💃🏾‍To run the project and see the tests passing</h3>

1. clone repository
```shell
git clone https://github.com/andressaaborges/learning-tdd.git
```

2. install dependencies:
```shell
npm i
```
or:

```shell
yarn init
```

3. execute tests:
```shell
npm run test
```

<br>
<hr>
<br>

<h6>
    PR's is welcome!
</h6>

> <img src="https://github.com/andressaaborges/portfolio-pretalab/blob/master/assets/logo-andressa-borges.svg" width="24" alt="Logo Andressa Borges"/> Andressa Borges
