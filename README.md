# benchmark-solarsystem - english
This benchmark compares the performance of three AI models—ChatGPT o3-mini, DeepSeek, and Alibaba Qwen 2.5—when tasked with creating a 3D solar system simulation using Next.js.

The goal of the project was straightforward: I asked each AI to generate a web-based solar system simulation that would use the browser’s current date and time for real-time approximation, while also providing the option to accelerate the simulation. I did not modify any of the generated code; I simply took the instructions and attempted to run them as provided.

Benchmark Date: February 6, 2025

# Results
## ChatGPT o3-mini
The o3-mini version was already broken before I even began. Initially, it instructed me to create a Next.js project, as all the others did. However, when it came time to install the dependencies:
```nginx
npm install @react-three/fiber @react-three/drei styled-components
```
it returned a series of errors. Since the goal was to test the AI’s ability to provide clear, step-by-step instructions for a beginner, o3-mini did not pass the test.

![image](https://github.com/user-attachments/assets/12c3fe7c-828f-4602-95bf-87b75159d3fe)

Even after forcing npm to ignore the security issues and proceeding, the generated code still broke on import. This suggests that the o3-mini output referenced an outdated version of the libraries. It seems that, although the AI o3-mini has some capacity to “think” and search for information, in this case it failed to produce code that could run without errors.

![image](https://github.com/user-attachments/assets/ffa0eea9-7b27-407a-a98c-6c84e3c5376c)

![image](https://github.com/user-attachments/assets/005d29cb-dd3b-4463-960a-869a06a3f657)

## DeepSeek
DeepSeek managed to provide a more interesting structure by separating functionality into a components folder. However, it instructed me to create textures for the planets without specifying where to store or import them. It generated a function that was neither exported nor invoked.

Additionally, while it generated a page with a loading indicator, the loading state never ended. No explicit error was shown, so it appears that the instructions for generating all necessary elements were incomplete. One more detail: it also recommended installing a legacy version of a package, and I had to override security warnings to install the dependencies.

## Alibaba Qwen 2.5
Alibaba Qwen 2.5 was the most convincing in creating a full application. It asked me to create separate components for the planets, the solar system, and the sun. The approach was very detailed and modular.

However, like the others, Qwen 2.5 also recommended installing a legacy version of a library. I had to force the installation of these outdated dependencies, which then caused import errors (for example, the import of `Sphere` followed an outdated syntax).

![image](https://github.com/user-attachments/assets/ae04dbad-2e00-4bac-b5c0-5d3ac61d2e36)

# Final Analysis
All three AIs demonstrated impressive capabilities. However, their instructions did not account for practical issues such as npm’s security warnings or outdated library versions. They did not “test” their generated code before providing it, which left us with a series of errors that would be difficult for someone with only basic knowledge to resolve.

In my opinion, Alibaba Qwen 2.5 came closest to delivering a fully functional solution—especially given that it is free—making it the best of the three in this test. Nonetheless, the verdict remains that cutting-edge technology is only as good as the underlying technical expertise available to maintain and update it.

Our tests revealed that, without proper guidance on how to resolve issues like outdated dependencies, even advanced AIs can leave developers with more questions than answers. Ultimately, these tools serve as assistants rather than complete replacements for experienced developers.

Below is the prompt used across all three technologies:

> Prompt: Create a 3D solar system simulation using Next.js. The simulation should run in real time by using the browser's date and time to approximate the current positions. Additionally, provide a control to accelerate the simulation independently from real time.


---

# benchmark-solarsystem - português

Este benchmark compara o desempenho de três modelos de IA—ChatGPT o3-mini, DeepSeek e Alibaba Qwen 2.5—quando solicitados a criar uma simulação 3D do sistema solar usando Next.js.

O objetivo do projeto era simples: pedi que cada IA gerasse uma simulação do sistema solar para a web, utilizando a data e hora atual do navegador para aproximar a simulação em tempo real, além de fornecer a opção de acelerar a simulação. Não modifiquei nenhum dos códigos gerados; apenas peguei as instruções e tentei executá-las conforme fornecidas.

Data do Benchmark: 6 de fevereiro de 2025

# Resultados
## ChatGPT o3-mini
A versão o3-mini já estava quebrada antes mesmo de começar o projeto. Inicialmente, ela me instruiu a criar um projeto Next.js, como as outras fizeram. Contudo, na hora de instalar as dependências:
```nginx
npm install @react-three/fiber @react-three/drei styled-components
```
ela simplesmente retornou uma série de erros. Como a intenção era testar a capacidade da IA de fornecer instruções passo a passo para alguém sem experiência avançada, o o3-mini não passou.

![image](https://github.com/user-attachments/assets/edae86c2-1060-43d6-9086-40fd8b7c19d9)

Mesmo forçando o npm a ignorar os avisos de segurança e prosseguindo, o código gerado ainda apresentava falhas na importação, o que sugere que o o3-mini referenciou uma versão muito desatualizada das bibliotecas. Apesar de sua capacidade de “pensar” e buscar informações, neste caso não foi possível gerar um código funcional sem erros.

![image](https://github.com/user-attachments/assets/9db929c6-b630-4420-ad2b-e382dd1733e6)

![image](https://github.com/user-attachments/assets/57b29520-0fe8-4efe-a6ea-01a96a1ca3c5)

## DeepSeek
O DeepSeek conseguiu proporcionar uma estrutura mais interessante, separando as funcionalidades em uma pasta de componentes. Contudo, ele me instruiu a criar as texturas dos planetas sem especificar onde armazená-las ou de onde importá-las. Foi gerada uma função que não foi exportada nem chamada em nenhum lugar.

Além disso, ele gerou uma página com um indicador de carregamento que, infelizmente, ficou em carregamento infinito. Não houve erro explícito, mas parece que as instruções para gerar todos os elementos necessários estavam incompletas. Outro detalhe é que ele também recomendou a instalação de uma versão legada de um pacote, tendo que “abaixar as defesas” para instalar as dependências.

## Alibaba Qwen 2.5
O Qwen, por sua vez, foi muito mais convincente na criação de uma aplicação completa. Ele me instruiu a criar os planetas dentro de uma pasta de componentes, juntamente com o sistema solar e o sol. Foi muito interessante, pois tudo estava separado e detalhado.

Porém, ele cometeu o mesmo erro dos outros dois, instruindo-me a instalar uma biblioteca legada ou uma versão desatualizada, que precisei forçar a instalação. Isso resultou em erro na importação, pois a forma de importar o componente `Sphere` seguia uma sintaxe obsoleta.

![image](https://github.com/user-attachments/assets/ae04dbad-2e00-4bac-b5c0-5d3ac61d2e36)

# Análise Final
As três IAs demonstraram capacidades impressionantes. Entretanto, o fato de serem tão inteligentes e não perceberem que o npm pode apresentar problemas – por conta de avisos de segurança ou versões desatualizadas das bibliotecas – e não “testarem” o código antes de enviá-lo ao usuário, deixa dúvidas.

Acredito que, na verdade, a mais próxima de uma solução funcional foi a Alibaba Qwen 2.5, conforme já havia sido mencionado, e ainda mais considerando que é gratuita, o que permite uma comparação direta entre Qwen e DeepSeek.

Mas, o veredito continua o mesmo: não adianta ter tecnologia de ponta se as pessoas responsáveis por mantê-la não possuem conhecimento suficiente para atualizá-la. Nossos testes resultaram em uma série de erros que qualquer pessoa com conhecimentos básicos não conseguiria resolver sem instruções detalhadas.

Agora, cabe aproveitar a abordagem dessas IAs e utilizar sua experiência técnica para colocar em prática os resultados desejados, lembrando sempre que podem ocorrer erros, que o código pode estar desatualizado e que a IA é apenas uma assistente, e não um desenvolvedor completo.

Também deixo aqui o prompt que foi utilizado nas três tecnologias:
> Prompt: Crie uma simulação 3D do sistema solar, usando Next.js. Quero que a simulação acompanhe o tempo real (ela pegará a data e hora do navegador para tentar simular o mais próximo possível) e que haja também a possibilidade de acelerar a simulação – esse controle de aceleração fica fora da simulação em tempo real.