# Portfólio Pessoal — CP4

Versão consolidada do portfólio com cinco páginas: Início, Currículo, Contato, Multimídia e Gráficos.

## Recursos e tecnologias

- HTML5 semântico, CSS responsivo e JavaScript.
- Bootstrap 5.3.3 por CDN. Classes aplicadas: `container`, `card`, `btn`, `shadow-sm`, `mb-4`, `p-3`, `p-md-4`.
- Alternância de alto contraste com preferência persistida em `localStorage`.
- Gráfico interativo desenhado com Canvas.
- Validação de formulário no navegador.
- Acessibilidade: link para pular ao conteúdo, `alt` na imagem, títulos e rótulos, foco visível, navegação por teclado, regiões de status e respeito à preferência por movimento reduzido.

## Teste local

Abra `index.html` ou utilize a extensão Live Server no Visual Studio Code. A conexão com a internet é necessária para carregar o Bootstrap pelo CDN.

## Publicação HTTPS com GitHub Pages

1. Envie o conteúdo desta pasta para a branch principal (`main`) de seu repositório.
2. No GitHub, abra **Settings → Pages**.
3. Selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`.
4. Aguarde a publicação. Ative **Enforce HTTPS**, se disponível.
5. Teste o endereço em janela anônima e abra as cinco páginas.

## Criar a tag cp4-entrega

Esta pasta já contém um repositório Git local com a tag `cp4-entrega`. Para conectá-lo ao seu repositório remoto do GitHub, copie a URL do repositório e execute:

```bash
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
git push origin cp4-entrega
```

Se você copiar os arquivos para um repositório existente em vez de usar esta pasta como repositório, faça o commit e crie a tag `cp4-entrega` no commit final antes do push.

## Teste da persistência (feature JavaScript)

1. Abra o site e clique em **Alto contraste: desligado**.
2. Atualize com F5 ou navegue para outra página.
3. O modo deve continuar ligado.
4. Para comprovar, abra DevTools → Application → Local Storage e procure `portfolio-leonan-alto-contraste`.

## Observações

- O formulário apenas valida os campos; não envia e-mail nem transmite os dados.
- O conteúdo de formação e experiências do currículo foi mantido do arquivo original. Revise as informações pessoais/profissionais antes da entrega.
- Os arquivos de mídia originais foram preservados; a estrutura HTML da página Multimídia foi corrigida.
- Vídeo de apresentação e envio no Blackboard não fazem parte desta preparação.
