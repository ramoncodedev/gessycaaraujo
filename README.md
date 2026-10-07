# Link Bio — Géssyca Araújo | Nutricionista

Página única de links para a bio do Instagram (@nutricionista.gessycaraujo). HTML + CSS + JS puro: abra `index.html` ou suba a pasta inteira na hospedagem.

Referência visual: mesma estrutura do link bio da OdontoBrandão (estilo thomdesigner.com.br) — palavra gigante com degradê, retrato sobreposto, faixa de especialidades em pílula, seção escura de conversão.

## Identidade
- Cores: creme `#F6EFE8`, cacau `#3A2620` (seção escura e rodapé), rosé `#C27767` / `#A5584A` (batom, tons do feed), sálvia `#7D8C6F` (nutrição)
- Fontes: Anton (títulos), Instrument Serif itálico (acentos), Manrope (texto) — arquivos em `assets/fonts`
- Palavra do hero: **LEVEZA** (emagrecimento + comportamental). Para trocar, editar `.hero__word` no `index.html`

## Estrutura
1. Topbar com monograma GA + botão "Agendar"
2. Hero — faixa de áreas de atuação + "LEVEZA" gigante + retrato com anel girando + selo +1000 vidas
3. 01/02 Agende sua consulta → Online e Presencial (WhatsApp com mensagem pronta) + Tirar uma dúvida
4. 03 Mounjaro sem efeito sanfona → WhatsApp
5. 04 O que acontece na consulta (4 etapas)
6. 05 Histórias reais de pacientes → Instagram
7. Redes: Instagram, mini vlogs (reels), WhatsApp
8. Rodapé

## Editar links
Todos no topo de `js/main.js` (objeto `LINKS`). O número do WhatsApp fica em `WHATS`.

## Pendências
- **Foto em alta**: a atual é a foto de perfil do Instagram (150px). Pedir uma foto quadrada ≥ 600px e substituir `assets/gessyca.jpg` e `.webp`
- **CRN**: não está no perfil — pedir e colocar no `.hero__cro` e no rodapé
- **Endereço do consultório**: se ela passar, adicionar botão "Como chegar" no card Presencial (igual OdontoBrandão)
- Links "Ver resultados" e "Conhecer meu método" apontam para o perfil; trocar pelos links dos destaques "Pacientes" e "Meu método"
- Textos das etapas da consulta foram escritos a partir dos posts — pedir para ela revisar
- `og:image`: usar URL absoluta quando houver domínio
