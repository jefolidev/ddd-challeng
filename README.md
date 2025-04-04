# Entidades -

- Funcionário

  - Possui um id
  - Nome do funcionário
  - Cargo do funcionário

- Cargos
  - Nome do cargo
  - Conjunto de permissoes

- Produto

  - Possui um id
  - Quantidades em estoque
  - Array de propriedades
  - Limite min.
  - Preço de venda

- Alertas

  - Id de alerta
  - Id do protudo cujo está alertando
  - Conteudo do alerta

- Histórico de vendas

  - Array de Vendas
  - Data de quando histórico foi gerado
  - Lucro gerado em um periodo de tempo
  - Quais produtos venderam mais em um perioto
  - Ver quais itens do estoque sairam mais

- Estoque

  - Adiciona novos produtos
  - Atualiza a quantidade disponível
  - Gera alertas quando estoque tiver baixo
  - Cria ordens de compra automaticamente

- Propriedades

  - Id do produto
  - Nome da propriedade
  - Conteudo da propriedade

- Venda

  - Id do produto
  - Data do produto

- Item de Venda

  - Id do produto
  - Quantidade vendida
  - Preço unitario

- Ordens de compra

  - id da ordem de compra
  - data de quando foi gerada
  - está pendente sim ou nao
  - foi finalizada sim ou nao
  - data em que foi concluída
  - prazo de entrega
  - items da ordem de compra

- Revisão de Ordem de compra

  - Id da revisão
  - Data em que a revisão foi feita
  - Foi aprovada ou nao
  - Data da aprovação / negação

# Casos de uso -

## Funcionário -

- Funcionarios devem poder adicionar informações extras, como cor e tamanho

- Funcionarios devem poder definir quantidade mínimas de estoque

- Funcionarios devem poder rastrer cada produto individualmente

- Funcionarios devem poder receber alerta por email e por meio de uma notificação em sistema

- Funcionarios devem poder receber alertas quando atingir limite mínimo de produtos em estoque

- Funcionarios devem poder visualiazar histórico de vendas

## Histórico de Vendas -

## Ordem de compra automático

- Ordens devem passar por uma revisão manual antes e se liberado, evetivamente seguindo o fluxo
- Ordens devem verificar se a quantidade de protudo for menor que o limite min. de produtos até o alerta, gera um alerta automaticamente
- Ordens devem enviar alertas de vendas para os funcionários com prazo de entrega e novas remessas

## Alertas

- Alertas devem ler a quantidade dos produtos através do Estoque
