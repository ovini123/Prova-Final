# Validação de formulário

#### Uma empresa local fez um formuário online para fazer pesquisas sobre usuários de acordo com seu email e id, porém, esses dados foram cadastrados sem ter uma validação prévia. O email cadastrado deve ser um email válido e o ID deve atender ao formato UUID.


##### O que foi feito: Desenvolvido um sistema que verifica se os dados de usuários atende o formato desejado!

##### Design patterns utilizados: Chain of responsability e Adapter.


##### Chain of responsability: Foi utilizado para implementar o fluxo de verificação dos campos email e id.

##### Adapter: Foi utilizado para o desacoplamento de serviços externos, no projeto foi utilizado a lib externa chamada validator mas a mesma não está acoplada ao sistema, fornecendo uma segurança a mais ao sistema caso se torne necessário a troca da lib por outra lib externa ou para alguma função customizada.