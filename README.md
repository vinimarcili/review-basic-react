# Exercícios de React + TypeScript

Os exercícios abaixo têm como objetivo praticar
**Componentização, Props, `useState` e `useEffect`** por meio de
aplicações visuais e pequenas.

Cada exercício foi pensado para ser realizado em **até 1 hora**.

---

## Exercício 1 — 🎨 Galeria de Cards

### Conceitos do exercício 1

- Componentização
- Props

### Objetivo do exercício 1

Criar uma galeria visual de personagens usando componentes React
reutilizáveis.

A ideia é criar um componente de card que possa receber
informações diferentes por meio de **Props**, permitindo exibir
vários personagens sem repetir o código HTML.

### O que deve ser feito no exercício 1

- Criar um componente `CharacterCard`.
- Criar um componente `CharacterList`.
- Criar uma lista com pelo menos **6 personagens**.
- Cada personagem deve possuir:
  - Nome
  - Imagem
  - Função/personagem
  - Nível
- O componente `CharacterCard` deve receber as informações do
  personagem por meio de **Props**.
- Organizar os cards em uma grade.
- Criar uma estilização visual para deixar a galeria agradável.

### Estrutura sugerida do exercício 1

```text
src/
├── components/
│   ├── CharacterCard.tsx
│   └── CharacterList.tsx
├── App.tsx
└── ...
```

### Interface sugerida do exercício 1

```typescript
interface Character {
  id: number;
  name: string;
  image: string;
  role: string;
  level: number;
}
```

O componente `CharacterCard` deve receber os dados por meio de
Props:

```tsx
<CharacterCard
  name="Mario"
  image="..."
  role="Hero"
  level={10}
/>
```

### Resultado esperado do exercício 1

```text
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│     🎮         │  │     🎮         │ │       🎮       │
│     Mario      │  │     Luigi      │  │     Peach      │
│                │  │                │  │                │
│     Hero       │  │     Hero       │  │     Support    │
│     Level 10   │  │     Level 8    │  │     Level 12   │
└────────────────┘  └────────────────┘  └────────────────┘
```

### Extra do exercício 1

Adicionar uma prop chamada `highlighted`.

Quando `highlighted` for `true`, o card deve apresentar uma
aparência visual diferente dos demais.

---

## Exercício 2 — 🛒 Carrinho de Compras

### Conceitos do exercício 2

- `useState`
- Props
- Componentização

### Objetivo do exercício 2

Criar uma pequena loja virtual em que o usuário possa visualizar
produtos e adicioná-los ou removê-los do carrinho.

Neste exercício, o objetivo principal é usar
**`useState` para controlar o estado do carrinho** e usar
**Props para compartilhar informações entre os componentes**.

### O que deve ser feito no exercício 2

- Criar uma lista de produtos.
- Criar um componente `ProductCard`.
- Criar um componente `ProductList`.
- Criar um componente `Cart`.
- Criar um componente `CartItem`.
- Permitir adicionar produtos ao carrinho.
- Permitir remover produtos do carrinho.
- Exibir a quantidade de produtos no carrinho.
- Exibir o valor total da compra.
- Exibir uma mensagem quando o carrinho estiver vazio.

### Estrutura sugerida do exercício 2

```text
src/
├── components/
│   ├── ProductCard.tsx
│   ├── ProductList.tsx
│   ├── Cart.tsx
│   └── CartItem.tsx
├── App.tsx
└── ...
```

### Interface sugerida do exercício 2

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
```

O estado do carrinho deve ser controlado usando `useState`:

```tsx
const [cart, setCart] = useState<Product[]>([]);
```

### Props do exercício 2

O `ProductCard` deve receber o produto por meio de Props:

```tsx
<ProductCard product={product} />
```

Também deve receber uma função responsável por adicionar o
produto ao carrinho:

```tsx
<ProductCard
  product={product}
  onAdd={handleAddProduct}
/>
```

O `CartItem` deve receber o produto e uma função responsável por
removê-lo.

### Resultado esperado do exercício 2

```text
┌──────────────────────────────────────────────────────┐
│                  🛍️ Minha Loja                       │
├──────────────────────────┬───────────────────────────┤
│                          │                           │
│ Produtos                 │ Carrinho                  │
│                          │                           │
│ ┌────────────┐           │ 🎮 Controle              │
│ │    🎮      │           │ R$ 250,00                │
│ │  Controle  │           │                           │
│ └────────────┘           │ 🎧 Headset               │
│                          │ R$ 300,00                │
│                          │                           │
│ ┌────────────┐           │ Total: R$ 550,00         │
│ │    🎧      │           │                           │
│ │  Headset   │           │                           │
│ │ R$ 300,00  │           │                           │
│ │    [+]     │           │                           │
│ └────────────┘           │                           │
└──────────────────────────┴───────────────────────────┘
```

### Fluxo esperado do exercício 2

```text
ProductCard
     │
     │ onAdd()
     ↓
   App
     │
     │ atualiza useState
     ↓
   Cart
     │
     ↓
 CartItem
```

### Extra do exercício 2

Impedir que o mesmo produto seja adicionado várias vezes como
itens separados.

Em vez disso, apresentar a quantidade:

```text
🎮 Controle

R$ 250,00

Quantidade: 3
```

---

## Exercício 3 — 🌤️ Painel de Clima

### Conceitos do exercício 3

- `useEffect`
- `useState`
- Props
- Componentização

### Objetivo do exercício 3

Criar um painel de clima em que o usuário possa pesquisar uma
cidade e visualizar informações climáticas.

Neste exercício, será simulada uma requisição para uma API
usando `setTimeout`.

O objetivo principal é entender como usar o
**`useEffect` para executar efeitos quando informações do
componente são alteradas**.

### O que deve ser feito no exercício 3

- Criar um campo para pesquisar uma cidade.
- Criar um botão de busca.
- Criar um componente `SearchBar`.
- Criar um componente `WeatherCard`.
- Usar `useState` para controlar:
  - Cidade pesquisada
  - Dados do clima
  - Estado de carregamento
- Simular uma requisição usando `setTimeout`.
- Exibir uma mensagem enquanto os dados estão sendo carregados.
- Exibir os dados do clima após a busca.
- Exibir uma mensagem caso a cidade não seja encontrada.
- Usar `useEffect` para executar uma ação quando os dados do
  clima forem alterados.

### Estrutura sugerida do exercício 3

```text
src/
├── components/
│   ├── SearchBar.tsx
│   └── WeatherCard.tsx
├── data/
│   └── weather.ts
├── App.tsx
└── ...
```

### Interface sugerida do exercício 3

```typescript
interface Weather {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  wind: number;
}
```

Pode ser criado um conjunto de dados simulando uma API:

```typescript
const weatherData: Record<string, Weather> = {
  "São Paulo": {
    city: "São Paulo",
    temperature: 24,
    condition: "Ensolarado",
    humidity: 65,
    wind: 15
  },
  "Curitiba": {
    city: "Curitiba",
    temperature: 18,
    condition: "Nublado",
    humidity: 78,
    wind: 12
  }
};
```

### Estados do exercício 3

O componente principal deve possuir estados semelhantes a:

```tsx
const [city, setCity] = useState("");
const [weather, setWeather] = useState<Weather | null>(null);
const [loading, setLoading] = useState(false);
```

### Simulação da busca no exercício 3

Ao clicar no botão de busca:

1. Alterar `loading` para `true`.
2. Simular uma requisição usando `setTimeout`.
3. Procurar a cidade nos dados disponíveis.
4. Atualizar o estado `weather`.
5. Alterar `loading` para `false`.

### Uso do `useEffect` no exercício 3

Usar `useEffect` para executar alguma ação quando o clima for
alterado.

Por exemplo, alterar o título da página:

```text
Clima — São Paulo
```

ou:

```text
Clima — Curitiba
```

A ideia é demonstrar que o `useEffect` pode executar um efeito
quando uma informação utilizada pelo componente é alterada.

### Resultado esperado do exercício 3

Inicialmente:

```text
┌─────────────────────────────────────────┐
│              🌤️ Clima                  │
│                                         │
│ Cidade: [ São Paulo        ] [Buscar]   │
│                                         │
└─────────────────────────────────────────┘
```

Durante a busca:

```text
┌─────────────────────────────────────────┐
│              🌤️ Clima                  │
│                                         │
│ Cidade: [ São Paulo        ] [Buscar]   │
│                                         │
│              Carregando...              │
└─────────────────────────────────────────┘
```

Após a busca:

```text
┌─────────────────────────────────────────┐
│              🌤️ Clima                  │
│                                         │
│ Cidade: [ São Paulo        ] [Buscar]   │
│                                         │
│           ☀️ São Paulo                 │
│                                         │
│               24°C                      │
│                                         │
│           Ensolarado                    │
│                                         │
│ 💧 Umidade: 65%                         │
│ 💨 Vento: 15 km/h                       │
└─────────────────────────────────────────┘
```

Caso a cidade não exista:

```text
┌─────────────────────────────────────────┐
│              🌤️ Clima                  │
│                                         │
│ ❌ Cidade não encontrada                │
└─────────────────────────────────────────┘
```

### Extra do exercício 3

Alterar o ícone apresentado de acordo com a condição climática:

```text
Ensolarado → ☀️
Nublado    → ☁️
Chuvoso    → 🌧️
```

---

## Conceitos trabalhados

| Conceito | Exercício 1 | Exercício 2 | Exercício 3 |
| --- | :---: | :---: | :---: |
| Componentização | ✅ | ✅ | ✅ |
| Props | ✅ | ✅ | ✅ |
| `useState` | — | ✅ | ✅ |
| `useEffect` | — | — | ✅ |

### Progressão

```text
Componentização
       ↓
     Props
       ↓
   useState
       ↓
   useEffect
```

A proposta é que cada exercício introduza uma necessidade que
justifique o próximo conceito, em vez de usar os hooks apenas
de forma artificial.
